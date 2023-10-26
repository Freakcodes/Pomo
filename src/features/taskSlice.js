import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    tasks:[]
}

export const taskSlice=createSlice({
    name:'task',
    initialState,
    reducers:{
        addTasks:(state,action)=>{
            const task={
                id:nanoid(),
                text:action.payload
            }
            state.tasks.push(task)
        },
        removeTasks:(state,action)=>{
            state.tasks=state.tasks.filter((task)=>task.id!=action.payload)
        }
    }
})

export const{addTasks,removeTasks}=taskSlice.actions;
export default taskSlice.reducer;