import { useState,useEffect } from 'react'
import './App.css'
import Headerr from './components/Headerr'
import TamilKeyBoard from './components/TamilKeyBoard'

function App() {

  let [text,setText] = useState("");
  // let [cursor,setCursor] = useState(0);

  return (
    <>
      <Headerr />
      <TamilKeyBoard text={text} setText={setText} />
    </>
  )
}

export default App
