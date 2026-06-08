import React from 'react'
import {useEffect} from 'react'
import wordMap from '../assets/wordMap.json'

const update = ({element,theMap,txtArea,active}) => {
  /*
  Let's map the function definotion I forgot what I have in each of them lol
  Let's see,
    -- element =  maps to indvidual key
    -- theMap  = el of individual key containing word,translation,shifttranslation
    -- txtArea = to get start and end pointers of text area
    -- active  = to check focus of text area!
  */
  const shiftMap = {
        '>': '.',
        '<': ',',
        '?': '/',
        ':': ';',
        '"': "'",
        '{': '[',
        '}': ']',
        'P':'p',
        'O':'o',
        // ':':'l'
    }
  function handleKeyPress(event){
    if(active){
      const key = shiftMap[event.key] || event.key
      element[key]?.click() //see element is used here!
      console.log(key);
      let start = txtArea.selectionStart;
      let end = txtArea.selectionEnd;
      console.log(start,end);

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
