import React, { Fragment } from 'react'
import "./About.scss"
import {motion} from "framer-motion";
import {pageAnimation} from "../../Animation";

const about = () => {

  return (
  <Fragment>
    <div className='about-container'>
      <div className='image-container'>
        <motion.img exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='couple' src="https://images.unsplash.com/flagged/photo-1577474810448-82eb81a48d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80" alt='couple' />
      </div>
      <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='text-container'>
        <div className='top-heading'>
          <h2>Francisco & Anette Diopani</h2>
          <hr></hr>
        </div>
        <div className='story'>
          <p>After retiring in 2008 from an illustrious career in finance management, the Diopani’s moved deep into the Rocky Mountains and started selling high quality, one of a kind art prints to a wide variety of international clientele.<br></br><br></br>

Believing that beauty is a state of mind informed by who and what you surround yourself with, the Diopanis draw inspiration from the awesome splendor of the outdoors.  Having isolated themselves in the woods, they offer a selection of offerings that are uniquely selected to reflect the beauty and ambience of their surroundings.<br></br><br></br> 

The Blank Canvas guarantees expedient delivery and peak customer service to ensure an experience of world class artistry in the comfort of your own home. Join us in our little tranche of heaven!

          </p>
        </div>
      </motion.div>
    </div>
  </Fragment>
  )
}

export default about