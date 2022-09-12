import { useMemo } from "react";

export function FilteredList({peopleList}){
    
    const adultList = useMemo(()=>{
        return peopleList.filter(item => { return item.age > 18 
        })
    }, [peopleList])

    console.log(adultList);

    return(
        <div>
            {adultList.map(item=>{return <div className="m-1 p-2 border-solid border-white-300 border-1"><h4>{item.name}</h4><p>Age: {item.age} - ID: {item.id}</p></div>})}
        </div>
    )
}