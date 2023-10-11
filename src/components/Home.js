import React from "react";
import { useState } from 'react';
import Tcard from './/Tcard';
import { faker } from '@faker-js/faker';
// import useNav from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Home() {
  const [inputValue,setInputValue]=useState('');
  const navigate = useNavigate();

  const [isActive, setisActive] = useState(false);
  // function to show trends on search area click
  const handleTrends = () => {
    setisActive(!isActive);
  };

  // function to navigate to different route on enter key press
  const handleKeyPress = (e)=>{
    if(e.code === 'Enter'){
        navigate(`/products?query=${encodeURIComponent(inputValue)}`)
    }
  }
  return (
    <div className="container">
      {/* // logo */}
      <div className="z-logo"></div>
      {/* // search */}
      <input
        onClick={handleTrends}
        type="text"
        placeholder="Search"
        className="zbox"
        value = {inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        // onKeyPress={handleKeyPress}
        onKeyDown={handleKeyPress}
      />

      {/* trends box */}
      <div
        style={{
          display: isActive ? "flex" : "none",
        }}
        className="lt-box"
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "500",
            position: "relative",
            left: "2rem",
            top: "1rem",
          }}
        >
          Latest Trends
        </h1>
        {/* trend cards */}
        <div className="tcards">
          <Tcard img={faker.image.urlLoremFlickr({category:'fashion'})} text={faker.commerce.productName()} />
          <Tcard img={faker.image.urlLoremFlickr({category:'fashion'})} text={faker.commerce.productName()} />
          <Tcard img={faker.image.urlLoremFlickr({category:'fashion'})} text={faker.commerce.productName()} />
          <Tcard img={faker.image.urlLoremFlickr({category:'fashion'})} text={faker.commerce.productName()} />
          <Tcard img={faker.image.urlLoremFlickr({category:'fashion'})} text={faker.commerce.productName()} />
        </div>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "500",
            position: "relative",
            left: "2rem",
            top: "2.5rem",
          }}
        >
          Popular suggestions
        </h1>

        <p
          style={{
            position: "relative",
            top: "1rem",
            left: "2rem",
          }}
        >
          {faker.commerce.productName()}
          <br />
          {faker.commerce.productName()}
          <br />
          {faker.commerce.productName()}
          <br />
          {faker.commerce.productName()}
          <br />
        </p>
      </div>
    </div>
  );
}

export default Home;
