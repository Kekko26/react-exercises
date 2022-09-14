import { AppTwo } from "./AppTwo"
import { BrowserRouter } from "react-router-dom"
import { Container } from "./Container"
import { SWRConfig } from "swr"

const fetcher = url=> fetch(url).then(response => {if(response.ok){ return response.json() } else{throw new Error('An error has occurred in fetching')}}) 


export function Root(){
    return(

    <Container>

        <SWRConfig value={{
            fetcher
        }}>

        <BrowserRouter>

            <AppTwo />

        </BrowserRouter>

        </SWRConfig>

    </Container>
    
    )
}