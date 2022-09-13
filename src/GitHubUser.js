
import { useGitHubUser } from "./useGitHubUser";

export function GitHubUser({username}){

    const {data, error, isLoading, mutate} = useGitHubUser(username)
    function refetching(){
        mutate()
    }

    return(
        <div className=" border-1 border-white-300 border-solid m-5 p-5">
            {/* <button onClick={handleFetch}>Fetch user data</button> */}

            {isLoading && <div>Loading..</div>}
            
            {error && <h3>User not found</h3>}
            
            {data && <div>
            <h3>{data.login}'s Profile informations</h3>
            <p><strong>Profile real name:</strong> {data.name ? data.name: 'this user has no real name'}</p>
            <p><strong>Profile bio:</strong> {data.bio ? data.bio : 'this user has no bio'}</p>
            </div>}

            {!isLoading && <button onClick={refetching}>Refetch data</button>}
        </div>
    )
}