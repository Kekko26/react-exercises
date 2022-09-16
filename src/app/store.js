import { configureStore } from "@reduxjs/toolkit";
import { counterReducer }  from "./features/counter/counterReducer";
import { todoReducer } from "./features/todoList/todoSlice";
import { usersReducer } from "./features/users/usersSlice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        users: usersReducer,
        todos: todoReducer
    }
})