
import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser({username}){

    const {name, bio, error} = useGitHubUser({username})

    return(
        <div className=" border-1 border-white-300 border-solid m-5 p-5">
            {error ? <h3>User not found</h3> 
            : <div>
            <h3>{username}'s Profile informations</h3>
            <p><strong>Profile real name:</strong> {name ? name: 'this user has no real name'}</p>
            <p><strong>Profile bio:</strong> {bio ? bio : 'this user has no bio'}</p>
            </div>}
        </div>
    )
}