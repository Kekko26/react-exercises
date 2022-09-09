import { useState } from "react"

export function useFormsHook(){
    const [form, setForm] = useState({username: '', password: ''})

    function inputEvemtHandler(event){    
       setForm(prev => {
           const {name, value} = event.target
           return {...prev, [name]: value}
       })
   }

   return {form, inputEvemtHandler}

}