import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation(){
    const {currentPosition, loading, error, getPosition} = useCurrentLocation()

    function handleClick(){
        getPosition()
    }

    return (
        <div className="p-4 m-4 border-solid border-1 border-green-500">
            <button onClick={handleClick}>Get your position</button>
            {loading && <p>Loading..</p>}

            {!loading && error && 
            <div>
                <p>Position unreachable</p>
            </div>}
        
            {currentPosition && !loading && 
            <div>
            <p>Longitude: {currentPosition.coords.longitude}</p>
            <p>Latitude: {currentPosition.coords.latitude}</p>
            </div>}
        </div>
    )
}