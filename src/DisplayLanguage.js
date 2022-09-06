import React from "react";
import { Contesto } from "./LanguageContext";

export class DisplayLanguage extends React.Component{

    render(){
        const strings = {
            en: 'You selected english',
            it:  "Hai selezionato l'italiano"
        }

        return(
        <Contesto.Consumer>
            {(language)=>{
           return <h1>{strings[language]}</h1>
            }}
        </Contesto.Consumer>
        )
    }
}