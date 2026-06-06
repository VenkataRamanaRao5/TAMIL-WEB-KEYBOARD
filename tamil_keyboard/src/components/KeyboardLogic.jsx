import React from 'react'
import {useEffect} from 'react'
import wordMap from '../assets/wordMap.json'

const update = ({element,theMap}) => {
  const shiftMap = {
        '>': '.',
        '<': ',',
        '?': '/',
        ':': ';',
        '"': "'",
        '{': '[',
        '}': ']',
        'P':'p',
        'O':'o'
    }
  function handleKeyPress(event){
    const key = shiftMap[event.key] || event.key
    element[key]?.click()
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
