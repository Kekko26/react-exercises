import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter"

export function AppTwo(){
    
    return(
        <div>
        <Routes>
            <Route path="/" element={<Welcome name={'Pio'}/>}/>
            <Route path="counter" element={<Counter/>}/>
        </Routes>
        </div>
       
    )
}