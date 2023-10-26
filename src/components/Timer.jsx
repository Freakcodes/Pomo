import React,{useState,useEffect} from 'react';
import sound from "../../Congratulations.mp3"
import click from "../../click.mp3";
function Timer() {
  const[active,setActive]=useState(false);
  const[time,setTime]=useState(1500);
  const[isbreak,setIsBreak]=useState(false);
  const[isPomodoro,setIsPomodoro]=useState(true);
  const [isShortBreak,setIsShortBreak]=useState(false);
  const [isLongBreak,setIsLongBreak]=useState(false);
  
  const audio=new Audio(sound)
  const clickSound=new Audio(click);
  useEffect(()=>{
  let timer;
  if(active&&time>0){
    timer=setInterval(()=>{
      setTime((time)=>time-1);
    },1000)
  }
  if(time===0){
    audio.play();
  }
 if(!active||time===0){
  clearInterval(timer);
 }
 return () => clearInterval(timer);
  },[active,time]);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  const handleShortBreak=()=>{
    setIsBreak(true)
    setActive(false);
    setTime(300);
    
  }
  const handleStart=()=>{
    
    setActive(true);
    clickSound.play();
    
  }
  const handleStop=()=>{
    clickSound.play();
    setActive(false);
  }
  const handleReset=()=>{
    setIsBreak(false);
    setActive(false);
    setIsPomodoro(true);
    setTime(1500)
    
  
  }
  
  const handleLongBreak=()=>{
    setIsBreak(true)
    setActive(false);
    setTime(900);
  }
  

  
  return (
    <>
   
    <div className="h-[250px] w-[550px] text-center bg-white bg-opacity-10 backdrop-blur-md text-white mt-10 mx-auto border-200 backdrop-blur-3 shadow-sm rounded-md p-4">

    {/* <h1 className=' text-4xl font-semibold'>Pomodoro</h1> */}
    <button className=" pomodoro text-xl mx-3 hover:bg-red-400 hover:rounded-sm  focus:bg-red-400 focus:rounded-sm active:translate-y-1 " onClick={handleReset} >
      Pomodoro
    </button>
    <button onClick={handleShortBreak} className='text-xl mx-3 hover:bg-red-400 hover:rounded-sm  focus:bg-red-400 focus:rounded-sm active:translate-y-1'>
      Short Break
    </button>
    <button onClick={handleLongBreak} className='text-xl mx-3 hover:bg-red-400 hover:rounded-sm  focus:bg-red-400 focus:rounded-sm active:translate-y-1'>
      Long Break
    </button>
    <h1 className=' my-5 font-bold text-8xl mb-3'>
      {formatTime(time)}
    </h1>
    <button onClick={active ? handleStop : handleStart} className='text-xl mx-3 bg-white text-red-400 px-6 py-1 '>
          {active ? 'Pause' : 'Start'}
        </button>
    <button onClick={handleReset}>
      {isbreak?'Skip':'Reset'}
    </button>
    </div>
    <div>
          {isbreak?<p className='text-white mt-2 text-xl'>#Time for a break.. </p>:
          <p className='text-white mt-2 text-xl'>#Focussss!!</p>
          }
    </div>
    </>
    

   
    
  )

  }
export default Timer