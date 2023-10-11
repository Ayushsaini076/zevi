import React, { useState } from 'react'
import Pcard from './Pcard'
import { faker } from '@faker-js/faker';
import Data from './Data';
import Filters from './Filters'


function Products() {
  const [items,setItems]=useState(Data);
  // function to manage data filtering based on ratings
  const [filtered,setFiltered]=useState(false)
  const [rated,setRated]=useState(false)
  const handleRating=(rate)=>{
    if(rated==false){
      const newItems = Data.filter((val)=>val.rating==rate);
      setItems(newItems)
    }
    else{
      setItems(Data)
    }
    setRated(!rated)
    

  }
  // function to manage data filtering based on price
  const handlePrice = (maxp)=>{
    if(filtered==false){
      const newItems = Data.filter((val)=>val.nprice<=maxp);
      setItems(newItems);
    }
    else{
      setItems(Data)
    }
    setFiltered(!filtered)
    
  }
  return (
    <div className='p-container'>
        <div className="top">
        <input
        style={{
            height:'2.79rem',
            position:'absolute',
            top:'2rem',
            left:'23rem',
            borderRadius:'0.85rem',
            border:'0.687px solid rgba(0, 0, 0, 0.50)',
            gap:'29.09rem ' ,
            width:'44rem',
            backgroundPosition:'44rem',
            backgroundSize:'2rem',
            // fontSize:'2rem'
            fontSize:'2rem'
        }}
        type="text"
        placeholder="Search"
        className="zbox"
      />    
            <div style={{
                position:'absolute',
                top:'3rem'
            }} className="z-logo"></div>
        </div>

        <Filters
        handlePrice={handlePrice}
        handleRating={handleRating}
        />
        
        <div className="main">
          {/* mapping through data/filtered-data */}
            {items.map((item)=>{
              return(
                <Pcard
                key={item.id}
                img = {item.img}
                name={item.name}
                price = {item.price}
                nprice = {item.nprice}
                rev = {item.rev}
                rating={item.rating}
                />
              )
            })}
        </div>
        
      
    </div>
  )
}

export default Products
