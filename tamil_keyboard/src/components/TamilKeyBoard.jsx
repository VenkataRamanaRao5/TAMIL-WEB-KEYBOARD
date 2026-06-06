import React from 'react'
import wordMap from '../assets/wordMap.json'
import Headerr from './Headerr'
import Individual_keys from './Individual_keys'
import KeyboardLogic from './KeyboardLogic'
import { useRef } from 'react'

const TamilKeyBoard = () => {

    const text1 = "qwertyuiop[]{}"
    const text2 = "asdfghjkl;'"
    const text3 = "zxcvbnm,./"
    const rows1 = []
    const theHash = new Map();
    const ref = useRef({})
    for(let i=0;i<12;i++){
        let el = <Individual_keys ref={(ell)=>{ref.current[text1[i]]=ell}} key={i} word={text1[i]} translation={wordMap[text1[i]]?.normal} shiftTranslation={wordMap[text1[i]]?.shift} />
        theHash[text1[i]] = el;
        rows1.push(el) //this is "optional chaining"
    }
    const rows2 = []
    for(let i=0;i<11;i++){
        let el = <Individual_keys ref={(ell)=>{ref.current[text2[i]]=ell}} key={i} word={text2[i]} translation={wordMap[text2[i]]?.normal} shiftTranslation={wordMap[text2[i]]?.shift} />
        theHash[text2[i]] = el;
        rows2.push(el)
    }
    const rows3 = []
    for(let i=0;i<9;i++){
        let el = <Individual_keys ref={(ell)=>{ref.current[text3[i]]=ell}} key={i} word={text3[i]} translation={wordMap[text3[i]]?.normal} shiftTranslation={wordMap[text3[i]]?.shift} />
        theHash[text3[i]] = el;
        rows3.push(el)
    }
    // KeyBoardLogic({text,setText,cursor,setCursor,theHash});
    // let ref = useRef();
  return (

    <div className="container">
        <div className="keyBoard">
          <div id="row1" className="row_keys">{rows1}</div>
          <div id="row2" className="row_keys">{rows2}</div>
          <div id="row3" className="row_keys">{rows3}</div>
        </div>
        <div className="textPlace">
            <textarea  name="text" 
            className="textEditor" placeholder="துவங்கு...."/>
            {/* // value={text} onChange={printIt}> */}
        </div>  
        <KeyboardLogic element={ref.current} theMap={theHash}/> 
    </div>
  )
}

export default TamilKeyBoard
