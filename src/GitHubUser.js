
import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser({username}){

    const {data, error, loading, fetchData} = useGitHubUser()

    function handleFetch(){
        fetchData(username)
    }

    return(
        <div className=" border-1 border-white-300 border-solid m-5 p-5">
            <button onClick={handleFetch}>Fetch user data</button>

            {loading && <div>Loading..</div>}
            
            { !loading && error && <h3>User not found</h3>}
            
            { !loading && data && <div>
            <h3>{data.login}'s Profile informations</h3>
            <p><strong>Profile real name:</strong> {data.name ? data.name: 'this user has no real name'}</p>
            <p><strong>Profile bio:</strong> {data.bio ? data.bio : 'this user has no bio'}</p>
            </div>}
        </div>
    )
}