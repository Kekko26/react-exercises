import React, { useContext } from "react";
import { Contesto } from "./LanguageContext";

export function DisplayLanguage(){

        const strings = {
            en: 'You selected english',
            it:  "Hai selezionato l'italiano"
        }

        const language = useContext(Contesto)

        return(
            <h1>{strings[language]}</h1>
        )
}