
import { useEffect, useRef } from "react"

export function CarDetails({initialData}){

    const formRef = useRef(null)

    useEffect(()=>{
        formRef.current.reset();
    },[initialData])

    return(

        <form ref={formRef} className="p-3 m-3 border-solid border-2 border-blue-400">
            <input name="model" defaultValue={initialData.model}/> <br/>
            <input name="year" defaultValue={initialData.year}/>  <br/>
            <input name="color" defaultValue={initialData.color}/> <br/>
        </form>
    )

    
}
