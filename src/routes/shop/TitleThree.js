import React from 'react'
import "./Shop.scss"
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import {motion} from "framer-motion";

const TitleThree= () => {

  return (
    <>
    <h1 className='title'>{titleState.title}</h1>
    <motion.div ref={carouselTwo}  whileTap={{cursor: "grabbing"}} className='box'>
    <motion.div drag="x" dragConstraints={{right: 0, left: -widthTwo}} className="inner-carousel-two">
    <div className='item-two'>
    {artItems.map((artItem, index) => (
    <div className='product-card-container'>
        <img src={artItem.imageUrl} alt="flowers" />
        <div className='footer'>
          <span className='name' key={index}>{artItem.name}</span>
          <span className='price'>{artItem.price}</span>
          <button>Add to Cart</button>
        </div>
    </div>
  )
)}
</div>
</motion.div>
</motion.div>
</>
)
}

export default TitleThree