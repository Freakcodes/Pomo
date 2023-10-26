import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import Tasks from './components/ShowTasks'
import AddTasks from './components/AddTasks'
function App() {
  
  return (
    
      <div className=' '>
        
        <Timer/>
        <Tasks/>
        <AddTasks/>
        
          
      </div>    
    
  )
}

export default App
