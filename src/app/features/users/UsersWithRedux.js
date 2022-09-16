import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Add, Remove, Edit, selectAllUsers} from "./usersSlice"

export function UsersWithRedux(){
    const usersList = useSelector(selectAllUsers)

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [idCounter, setIdCounter] = useState(1)
    const [idRemove, setIdRemove] = useState('')
    const [userId, setUserId] = useState('')
    const [editAge, setEditAge] = useState('')



    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handleAge(e){
        setAge(Number(e.target.value))
    }

    function handleAdd(){
        dispatch(Add({name:username, id: idCounter, age: age}))
        setUsername('');
        setAge(0)
        setIdCounter(state=> state+1)
    }

    function handleRemove(e){
        setIdRemove(Number(e.target.value))
    }

    function handleRemoveUser(){
        dispatch(Remove(idRemove))
        // console.log(usersList);
    }

    function handleEditId(e){
        setUserId(Number(e.target.value))
    }
    function handleEditAge(e){
        setEditAge(Number(e.target.value))
    }

    function handleEdit(){
        dispatch(Edit({id:userId, data:{age: editAge}}))
        setEditAge('')
        setUserId('')
    }

    return(
        
        <div>
            <div>

            <h4>Add a user</h4>
            <input name="username" onChange={handleUsername} value={username} placeholder="Name"/>
            <input name="age" onChange={handleAge} value={age} placeholder="Age"/>
            <button disabled={!username || !age} onClick={handleAdd}>Add</button>

            </div>
            
            <div>
                <h4>Remove a user by ID</h4>
                <input name="idRemove" value={idRemove} onChange={handleRemove} placeholder={'Insert an user ID'}/>
                <button onClick={handleRemoveUser} disabled={!idRemove}>Remove user</button>
            </div>

            <div>
                <h4>Edit a user's age</h4>
                <input onChange={handleEditId} value={userId} name="userId" placeholder="ID of the user you want to edit"/>
                <input onChange={handleEditAge} value={editAge} name="newAge"placeholder="New age"/>
                <button onClick={handleEdit}>Edit user</button>
            </div>

            <ul className="list-none pl-0">
                {usersList.map((item)=> <li key={item.id} className="border-solid border-1 border-white-400 m-3 p-2"><p>Name: {item.name}</p> <p>ID: {item.id}</p> <p>Age: {item.age}</p></li>)}
            </ul>
        </div>
    )
}