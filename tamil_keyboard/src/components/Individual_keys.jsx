import React from 'react'

const Individual_keys = ({ word, translation, shiftTranslation }) => {
  return (
    <div className="individual_keys">
        <div className="top_part"> 
            <div className="word">{word?.toUpperCase()}</div>
            <div>{shiftTranslation}</div>
        </div>
        <div className="bottom_part">
            <div>{translation}</div>
        </div>
    </div>
  )
}

export default Individual_keys
