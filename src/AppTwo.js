import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter"
import { ShowGitHubUser } from "./ShowGitHubUser";

export function AppTwo(){
    
    return(
        <div>
            <h3>Navigate to:</h3>
            <p><Link to={"/"}>Home</Link> | <Link to={"counter"}>Counter</Link> | <Link to={"/users/kekko26"}>My Github</Link></p>

        <Routes>
            <Route path="/" element={<Welcome name={'Pio'}/>}/>
            <Route path="counter" element={<Counter/>}/>
            <Route path="/users/:username" element={<ShowGitHubUser/>}/>
            <Route path="*" element={<h3>Page not found</h3>}/>
        </Routes>
        </div>
       
    )
}