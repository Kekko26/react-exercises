import { createSlice, current } from "@reduxjs/toolkit";

const initialState = []

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        Add: (state, action) => [...state, action.payload],
        Remove: (state, action) => current(state).filter(item=>item.id!==action.payload),
        Edit: (state, action) => {
            return current(state).map(item => {
                if(item.id===action.payload.id){
                    return{...item, ...action.payload.data}
                }
                else {return item}
                })
        }
    }
})

export const { Add, Remove, Edit } = usersSlice.actions;

export const selectAllUsers = (state)=> state.users

export const usersReducer = usersSlice.reducer