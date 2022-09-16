import { createSlice, current } from "@reduxjs/toolkit"

const initialState = []

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        Add: (state, action) => [...state, action.payload],
        Remove: (state, action) => current(state).filter(item => item.id!==action.payload),
        Edit: (state,action) => {
           return current(state).map(item=> {
                if(item.id===action.payload.id){
                    return {...item, ...action.payload.data}
                }
                else{ return item }
            })
        }

    }
})

export const { Add, Remove, Edit } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;

export const selectAllTodos = (state) => state.todos;