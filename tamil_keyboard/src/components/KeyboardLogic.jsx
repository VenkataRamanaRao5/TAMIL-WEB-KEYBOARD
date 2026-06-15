import React, { useRef } from 'react'
import {useEffect} from 'react'
import wordMap from '../assets/wordMap.json'
import uyirmei from '../assets/uyirmei.json'

const update = ({element,theMap,txtArea,text,setText,active}) => {
  /*
  Let's map the function definotion I forgot what I have in each of them lol
  Let's see,
    -- element =  maps to indvidual key
    -- theMap  = el of individual key containing word,translation,shifttranslation
    -- txtArea = to get start and end pointers of text area
    -- active  = to check focus of text area!
  */
 const position = useRef(0)
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

    /*
    Use a ref to keep track of cursor position
    across re-renders.
    */
  let updateCursor = (pos) =>{
    position.current = pos
  }
  const allowedKeys = ["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]
  /*
  OMG if use preventdefault it stops from usual rendering and stuff so it waits till action is done.
  Ths I had to write logic for arrow keys but still it doens't work.
  So type slowly! shit! wtf! The only solution is to handle cursor manually!
  */
  function handleKeyPress(event){
    if(active){
      if(!allowedKeys.includes(event.key)){
        event.preventDefault();
      }
      console.log('key pressed:',event.key);

      let key = shiftMap[event.key] || event.key
      // key = key.toLowerCase();
      element[key.toLowerCase()]?.click() //see element is used here!

      console.log('key pressed:',key);

      let start = txtArea.selectionStart;
      let end = txtArea.selectionEnd;

      console.log('start:end',start,end);
      console.log(key)
      if(allowedKeys.includes(key)){
        console.log('did nothing')
      }
      else if(key === "Backspace"){
        console.log('clicked backspace');
        setText((prev)=>{return prev.slice(0,start-1)+prev.slice(end); });
        updateCursor(start-1);
        return
      }
      key = key.toLowerCase(); //fixed it moved it to middle
      if(key === " "){
        setText((prev)=>{return prev.slice(0,start)+" "+prev.slice(end)});
        updateCursor(start+1);
      }
      else if(key === "Tab"){
        setText((prev)=>{return prev.slice(0,start)+"\t"+prev.slice(end)});
        updateCursor(start+1);
      }
      else{
        // console.log(theMap)
        console.log(theMap[key])
        console.log(theMap[key].translation,theMap[key].shiftTranslation)
        // let newText = text.slice(0,start)+theMap[key].translation+text.slice(end);
        // console.log(newText)
        console.log(event.shiftKey)
        let value = event.shiftKey?theMap[key.toLowerCase()].shiftTranslation: theMap[key.toLowerCase()].translation
        if(start>0 && "அஆஇஈஉஊஎஏஐஒஓஔ".includes(value) && "கஙசஞடணதநபமயரலவழளறன".includes(text.slice(-1))){
          let v = text.slice(-1)
          setText((prev)=>{return prev.slice(0,start-1)+prev.slice(end); });
          updateCursor(start-1);
          value = uyirmei[v][value];
        }
        else if(start>0 && "்" === value && "அஆஇஈஉஊஎஏஐஒஓஔ".includes(text.slice(-1))){
          return
        }
        setText((prev)=>{return prev.slice(0,start)+value+prev.slice(end);});
        updateCursor(start+1);
      }
    }
  }

  useEffect(()=>{
    window.addEventListener('keydown',handleKeyPress);

    if(txtArea){

      txtArea.selectionStart = position.current;
      txtArea.selectionEnd = position.current;
    }

    console.log("Changed text/active", txtArea?.selectionStart, txtArea?.selectionEnd)
    return()=>{
      window.removeEventListener('keydown',handleKeyPress);
    }
  },[text,active])
  return (
    <></>
  )
}

export default update
