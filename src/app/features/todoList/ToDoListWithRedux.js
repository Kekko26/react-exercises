import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllTodos } from "./todoSlice"
import { Add, Remove, Edit } from "./todoSlice"

export function ToDoListWithRedux(){
    const TodoList = useSelector(selectAllTodos)
    const dispatch = useDispatch()
    const [id, setId] = useState(1)
    const [todo, setTodo] = useState({title: '', id: id, completed: false})
    const [removeId, setRemoveId] = useState('')
    const [edit, setEdit] = useState({title: '', completed: false})
    const [editId, setEditId] = useState('')

    function handleTodo(e){
        setTodo(prev => {
            return {...prev, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value}
        })
    }

    function handleAddClick(){
        dispatch(Add(todo))
        setTodo({title: '', id: id+1,  completed: false})
        setId(prev => prev+1)
    }

    function handleRemoveId(e){
        setRemoveId(Number(e.target.value))
    }
    
    function handleRemoveClick(){
        dispatch(Remove(removeId))
        setRemoveId('')
    }

    function handleEdit(e){
        setEdit(prev => {return {...prev, [e.target.name]: e.target.type==='checkbox' ? e.target.checked : e.target.value}})
    }
    function handleEditId(e){
        setEditId(Number(e.target.value))
    }
    function handleEditClick(){
        dispatch(Edit({id:editId, data: edit}))
        setEdit({title: '', completed: false})
        setEditId('')
    }

    return(
        <div>
            <div className="m-2 p-2 border-solid border-1 rounded-lg border-white-500">
                <h3>Add a todo</h3>
                <input name="title" value={todo.title} onChange={handleTodo} placeholder='Todo title'/>
                <input name="completed" type='checkbox' checked={todo.completed} onChange={handleTodo}/>
                <button onClick={handleAddClick}>Add todo</button>
            </div>

            <div className="m-2 p-2 border-solid border-1 rounded-lg border-white-500">
                <h3>Remove a todo</h3>
                <input name="removeById" value={removeId} onChange={handleRemoveId} placeholder='Todo to be removed'/>
                <button onClick={handleRemoveClick}>Remove</button>
            </div>

            <div className="m-2 p-2 border-solid border-1 rounded-lg border-white-500">
                <h3>Edit a todo</h3>
                <input name="EditId" value={editId} onChange={handleEditId} placeholder='ID'/>
                <input name="title" value={edit.title} onChange={handleEdit} placeholder='Edit todo title'/>
                <input name="completed" type='checkbox' checked={edit.completed} onChange={handleEdit}/>

                <button onClick={handleEditClick}>Edit Todo</button>
            </div>

            <ul className="list-none pl-0">
                {TodoList.map(item=>{return <li className={`border-solid border-1 m-2 p-2 ${item.completed ? "border-green-500" : "border-red-500"}`} key={item.id}><p>{item.title} - ID: {item.id}</p> {item.completed ? 'Done' : 'Not done yet'}</li>})}
            </ul>
        </div>
    )
}