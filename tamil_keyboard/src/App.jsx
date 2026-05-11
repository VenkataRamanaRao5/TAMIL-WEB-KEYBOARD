import { useState } from 'react'
import './App.css'
import Headerr from './components/Headerr'
import Individual_keys from './components/Individual_keys'
import wordMap from './assets/wordMap.json'

function App() {
  const text1 = "qwertyuiop[]{}"
  const text2 = "asdfghjkl;'"
  const text3 = "zxcvbnm,./"
  const rows1 = []
  for(let i=0;i<12;i++){
    rows1.push(<Individual_keys word={text1[i]} translation={wordMap[text1[i]]?.normal} shiftTranslation={wordMap[text1[i]]?.shift} />) //this is "optional chianing"
  }
  const rows2 = []
  for(let i=0;i<11;i++){
    rows2.push(<Individual_keys word={text2[i]} translation={wordMap[text2[i]]?.normal} shiftTranslation={wordMap[text2[i]]?.shift} />)
  }
  const rows3 = []
  for(let i=0;i<9;i++){
    rows3.push(<Individual_keys word={text3[i]} translation={wordMap[text3[i]]?.normal} shiftTranslation={wordMap[text3[i]]?.shift} />)
  }
  return (
    <>
      <Headerr />
      <div className="container">
        <div className="keyBoard">
          <div id="row1" className="row_keys">{rows1}</div>
          <div id="row2" className="row_keys">{rows2}</div>
          <div id="row3" className="row_keys">{rows3}</div>
        </div>
        <div className="textPlace">
            <textarea  name="text" className="textEditor" placeholder="துவங்கு...."></textarea>
        </div>
      </div>
    </>
  )
}

export default App
