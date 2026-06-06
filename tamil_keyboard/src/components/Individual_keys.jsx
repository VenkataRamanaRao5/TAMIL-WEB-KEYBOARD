import React from 'react'
import {useState,useEffect} from 'react'

const Individual_keys = React.forwardRef(({ word, translation, shiftTranslation,active },ref) => {

  function clrChange(event){
    if(active){
      const element = event.currentTarget; //target
      element.style.backgroundColor = 'rgb(231, 115, 115)';
      setTimeout(() => {
          element.style.backgroundColor = '';
      },300);
    }
  }
//useEffect(()=>{},[])
  return (
    <div className="individual_keys" onClick={clrChange} ref={ref}>
        <div className="top_part"> 
            <div className="word">{word?.toUpperCase()}</div>
            <div>{shiftTranslation}</div>
        </div>
        <div className="bottom_part">
            <div>{translation}</div>
        </div>
    </div>
  )
})

export default Individual_keys
