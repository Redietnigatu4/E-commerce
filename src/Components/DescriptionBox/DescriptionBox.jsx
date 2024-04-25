import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            E-commerce websites have come a long way since their inception.
             Initially, they primarily served as online marketplaces where consumers could purchase products 
             directly from vendors. However, with technological advancements and increased internet penetration,
              e-commerce websites have evolved into comprehensive platforms offering a wide range of products and services. 
              
            </p>
            <p>
            Furthermore, e-commerce websites offer secure payment gateways that facilitate smooth and safe transactions,
             instilling trust among consumers. They also provide detailed product descriptions, high-resolution images, and 
             customer reviews, empowering buyers to make well-informed purchasing decisions.
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
