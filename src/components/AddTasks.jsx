import React from 'react'
import { useDispatch} from 'react-redux'
import { addTasks } from '../features/taskSlice'
import { useState } from 'react';
function AddTasks() {
    const [input,setInput]=useState("");
    const[toAdd,setToAdd]=useState("false");
    const dispatch=useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault()
       if(input.length!==0){
        dispatch(addTasks(input))
       }
        
        setInput('');
    }
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 text-left  w-[550px] m-auto mt-3  ">
          <input
            type="text"
            className=" rounded border  focus:border-red-500 focus:ring-2 focus:ring-black text-base outline-none text-black py-1 px-3 w-[70%] leading-8 transition-colors duration-200 ease-in-out"
            placeholder="What are you working on?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "
          >
            Add Task
          </button>
        </form>
      )
    }


export default AddTasks