import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exlusive Offers On Your Email</h1>
        <p>subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>subscribe</button>
        </div>

    </div>
  )
}

export default NewsLetter