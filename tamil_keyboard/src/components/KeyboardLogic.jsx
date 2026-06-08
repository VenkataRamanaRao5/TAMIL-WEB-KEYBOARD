import React from 'react'
import {useEffect} from 'react'
import wordMap from '../assets/wordMap.json'

const update = ({element,theMap,txtArea,text,setText,active}) => {
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
  let crctBackspace = (start) => setTimeout(()=>{
      txtArea.selectionStart = start - 1;
      txtArea.selectionEnd = start - 1;
    },0)
  let crctText = (start) => setTimeout(()=>{
      txtArea.selectionStart = start + 1;
      txtArea.selectionEnd = start + 1;
    },0)
  function handleKeyPress(event){
    if(active){
      console.log('key pressed:',event.key);

      const key = shiftMap[event.key] || event.key
      element[key]?.click() //see element is used here!

      console.log('key pressed:',key);

      let start = txtArea.selectionStart;
      let end = txtArea.selectionEnd;

      console.log('start:end',start,end);
      console.log(key)

      if(key === "Backspace"){
        console.log('clicked backspace');
        let newText = text.slice(0,start-1)+text.slice(end);
        setText(newText);
        crctBackspace(start);
      }
      else if(key === " "){
        let newText = text.slice(0,start)+" "+text.slice(end);
        setText(newText);
        crctText(start);
      }
      else if(key === "Tab"){
        let newText = text.slice(0,start)+"\t"+text.slice(end);
        setText(newText);
        crctText(start);
      }
      else{
        // console.log(theMap)
        console.log(theMap[key])
        console.log(theMap[key].translation,theMap[key].shiftTranslation)
        let newText = text.slice(0,start)+theMap[key].translation+text.slice(end);
        console.log(newText)
        setText(newText);
        crctText(start);
      }
    }
  }
  function handleGameLogic(action,value){


  }
  useEffect(()=>{
    window.addEventListener('keydown',handleKeyPress);
    return()=>{
      window.removeEventListener('keydown',handleKeyPress);
    }
  })
  return (
    <></>
  )
}

export default update
