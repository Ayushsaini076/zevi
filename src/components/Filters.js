import React from 'react'
import r5 from '../images/5_stars.svg'
import r4 from '../images/4_stars.svg'
import r3 from '../images/3_stars.svg'
import r2 from '../images/2_stars.svg'
import r1 from '../images/1_star.svg';

// filters column -- left column on products page
function Filters({handlePrice,handleRating}) {
  return (
    <div className="filters">
          <h1 style={{
            position:'relative',
            left:'2rem',
            fontFamily:'Inter',
            fontSize:'2.5rem',
            fontWeight:'400',
            fontStyle:'normal',
            lineHeight:'normal'

          }}>Search Results</h1>

          <h2 className="s2">BRAND</h2>
          
            <input className='istyle' type='checkbox' id='br1' name='br1' value="Mango"></input>
            <label className='istyle' for="br1">Mango</label><br />
            <input className='istyle' type='checkbox' id='br2' name='br2' value="H&M"></input>
            <label className='istyle' for="br2">H&M</label>
          
          <hr style={{
            width:'15rem'
          }} />
          <h2 className="s2">PRICE RANGE</h2>
          
          <input onInput={()=>handlePrice(500)} className='istyle' type='checkbox' id='Pr1' name='pr1' value="500"></input>
            <label className='istyle' for="pr1">Under 500</label><br />
          <input onInput={()=>handlePrice(3000)} className='istyle' type='checkbox' id='Pr2' name='pr2' value="3000"></input>
          <label className='istyle' for="pr2">Under 3000</label><br />

          
          <hr style={{
            width:'15rem'
          }} />
          <h2 className="s2">RATINGS</h2>
          
          <input onInput={()=>handleRating(5)} className='istyle' type='checkbox' id='rat5' name='rat5' value="5star"></input>
          <label className='istyle' for="rat5"><img src={r5} alt="" /></label><br />
          <input onInput={()=>handleRating(4)} className='istyle' type='checkbox' id='rat4' name='rat4' value="4star"></input>
          <label className='istyle' for="rat4"><img src={r4} alt="" /></label><br />
          <input onInput={()=>handleRating(3)} className='istyle' type='checkbox' id='rat2' name='rat2' value="2star"></input>
          <label className='istyle' for="rat2"><img src={r3} alt="" /></label><br />
          <input onInput={()=>handleRating(2)} className='istyle' type='checkbox' id='rat2' name='rat2' value="2star"></input>
          <label className='istyle' for="rat2"><img src={r2} alt="" /></label><br />
          <input onInput={()=>handleRating(1)} className='istyle' type='checkbox' id='rat1' name='rat1' value="1star"></input>
          <label className='istyle' for="rat1"><img src={r1} alt="" /></label><br />

          
          {/* <hr /> */}
        </div>
  )
}

export default Filters
