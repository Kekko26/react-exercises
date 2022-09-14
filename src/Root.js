import { AppTwo } from "./AppTwo"
import { BrowserRouter } from "react-router-dom"
import { Container } from "./Container"
import { SWRConfig } from "swr"
import { AppRedux } from "./AppRedux"
import { Provider } from "react-redux";
import  { store } from "./app/store"

const fetcher = url=> fetch(url).then(response => {if(response.ok){ return response.json() } else{throw new Error('An error has occurred in fetching')}}) 


export function Root(){
    return(

    <Container>

        <SWRConfig value={{
            fetcher
        }}>

        <BrowserRouter>
            {/* <AppTwo /> */}

            <Provider store={store}>
                <AppRedux />
            </Provider>

        </BrowserRouter>

        </SWRConfig>

    </Container>
    
    )
}