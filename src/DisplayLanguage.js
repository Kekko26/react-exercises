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
           return <p>{strings[language]}</p>
            }}
        </Contesto.Consumer>
        )
    }
}