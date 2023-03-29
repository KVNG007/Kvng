import React from 'react'

const Ham = ({toggle, toggleShow}) => {
  return (
    <div className={ toggle ? "ham active" : " ham"}
          onClick={()=> toggleShow()}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default Ham