import React from 'react'
import {useEffect} from 'react'
import wordMap from '../assets/wordMap.json'
const update = ({text,setText,element}) => {
  function handleKeyPress(event){
    if(event.key === "Backspace"){
      handleGameLogic("backspace");
    }

    else if(event.key === "ArrowLeft"){
      handleGameLogic("cursor");
    }
    else if(event.key === "Tab"){
      handleGameLogic("tab");
    }
    else if(event.key.length===1){
      handleGameLogic("insert", event.key);
    }
  }
  function handleGameLogic(action,value){


  }
  useEffect(()=>{
    window.addEventListener('keypress',handleKeyPress);
    return()=>{
      window.removeEventListener('keypress',handleKeyPress);
    }
  })
  return (
    <></>
  )
}

export default update
