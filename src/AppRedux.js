import { CounterWithRedux } from "./app/features/counter/CounterWithRedux";
import { ToDoListWithRedux } from "./app/features/todoList/ToDoListWithRedux";
import { UsersWithRedux } from "./app/features/users/UsersWithRedux";

export function AppRedux(){

    return(
    <div>
        <CounterWithRedux/>
        {/* <UsersWithRedux /> */}
        <ToDoListWithRedux/>
    </div>
    )
}