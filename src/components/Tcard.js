import React from 'react'

// trends card
function Tcard(props) {
  return (
    <div className='tcard'>
        <div >
            <img className="t-img" src={props.img} alt="" />
        </div>
        <p>{props.text}</p>
      
    </div>
  )
}

export default Tcard
