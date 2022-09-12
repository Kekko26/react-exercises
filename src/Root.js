import { AppTwo } from "./AppTwo"
import { BrowserRouter } from "react-router-dom"
import { Container } from "./Container"

export function Root(){
    return(

    <Container>

        <BrowserRouter>

            <AppTwo />

        </BrowserRouter>

    </Container>
    
    )
}