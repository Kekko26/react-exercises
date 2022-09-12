import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter"
import { ShowGitHubUser } from "./ShowGitHubUser";

export function AppTwo(){
    
    return(
        <div>
        <Routes>
            <Route path="/" element={<Welcome name={'Pio'}/>}/>
            <Route path="counter" element={<Counter/>}/>
            <Route path="/users/:username" element={<ShowGitHubUser/>}/>
        </Routes>
        </div>
       
    )
}