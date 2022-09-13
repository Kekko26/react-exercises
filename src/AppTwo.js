import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter"
import { ShowGitHubUser } from "./ShowGitHubUser";
import { GitHubUsersList } from "./GitHubUsersList";


export function AppTwo(){

    return(
        <div>
            <h3>Navigate to:</h3>
            <p><Link to={"/"}>Home</Link> | <Link to={"counter"}>Counter</Link> | <Link to={"/users"}>Github profiles</Link></p>

        <Routes>
            <Route path="/" element={<Welcome name={'Pio'}/>}/>
            <Route path="counter" element={<Counter/>}/>
            {/* <Route path="/users/:username" element={<ShowGitHubUser/>}/> */}
            <Route path="*" element={<h3>Page not found</h3>}/>
            <Route path="/users" element={<GitHubUsersList/>} >
                <Route path=":username" element={<ShowGitHubUser/>}/>
                <Route index element={<p>Please add an user and select it</p>}/>
            </Route>
        </Routes>

        </div>
       
    )
}