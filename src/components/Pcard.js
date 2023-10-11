import React, { useState } from 'react'
import Heart from '../images/Heart.svg'
import Heart2 from '../images/Heart2.svg'
import star from '../images/Star 3.svg'


function Pcard(props){
  // console.log(Heart)
  const [visible,setVisible]=useState(false);
  const [url,setUrl]=useState(Heart);
  // function to handle the wishlist feature
  const handleClick=()=>{
    if(url==Heart){
      setUrl(Heart2);
    }
    else{
      setUrl(Heart);
    }
  }
  // function to show view product button on hovering 
  const handlehover=()=>{
    setVisible(true);
  }
  // function to hide view product button when hovering is removed
  const handleleave=()=>{
    setVisible(false)
  }
  let stars = props.rating
  // console.log(stars)

  const defaultval = 0;
  const imgArray = Array.from({length:stars})
  
  // console.log(imgArray.length)

  return (
    <div   className='pcard'>
      <div style={{
        height:'20rem'
      }}>
        <img onMouseOver={handlehover} onMouseLeave={handleleave} style={{
          height:'20rem',
          width:'14.9rem',
        }} src={props.img} alt="" />

        <img id="img2" onClick={handleClick} src={url}  alt="" />

        <button style={{
          display:visible?'flex':'none'
        }}   className="btn">View Product</button>

        
      </div>
      <p style={{
        fontFamily:'Inter',
        fontSize:'1.25rem',
        fontWeight:'400'
      }}>{props.name}</p>
      <span className='sp1' style={{
        color:'rgba(0,0,0,0.40)',
        fontFamily:'Inter',
        fontSize:'1.25rem',
        fontWeight:'300',
        textDecorationLine:'line-through',
        marginRight:'0.5rem'
        
      }}>Rs.{props.price}</span>
      <span style={{
        color:'#6D84FF',
        fontFamily:'Inter',
        fontSize:'1.25rem',
        fontWeight:'600'
      }}>Rs.{props.nprice}</span><br />
      
      <span>
        {/* to show rating stars */}
      {imgArray.map((ind)=>(
        <img
        key={ind}
        src={star}
        style={{width:'1rem',height:'1rem'}}
        />
      ))}
      </span>
      <span style={{
        color:'rgba(0,0,0,0.80)',
        textAlign:'center',
        fontFamily:'Poppins',
        fontSize:'1rem',
        fontWeight:'300',
        position:'relative',
        bottom:'0.2rem',
        left:'0.2rem'
      }}>({props.rev})</span>
      
    </div>
  )
}

export default Pcard
