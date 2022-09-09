import { useFormsHook } from "./useFormsHook"

export function LoginWithCustomHook(){
    const {form, inputEvemtHandler} = useFormsHook()
    
    return(
        <div>
            <input name="username" onChange={inputEvemtHandler} value={form.username}/> 
            <input name="password" onChange={inputEvemtHandler} value={form.password} type='password' />
        </div>
    )
}