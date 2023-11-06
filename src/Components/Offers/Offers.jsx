import React from 'react'
import './Offers.css'
import exlusive_image from '../Assets/exclusive_image.png'
function Offers() {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclussive</h1>
        <h1>Offers for You</h1>
        <p>Only on Best Sellrts Products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exlusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
