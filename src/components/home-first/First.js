import React from 'react'
import "./First.scss";
import {motion} from "framer-motion";
import { useScroll } from "../useScroll";
import { fade } from "../../Animation";
import Carousel from 'react-bootstrap/Carousel';

const First = () => {

  const [element, controls] = useScroll();

  return (
      <motion.div variants={fade} animate={controls} initial="hidden" ref={element}>
      <Carousel fade={true} controls={false} pause={false}>
          <Carousel.Item interval={4000}>
          <img
            className="main-image"
            src="https://images.unsplash.com/photo-1584728092269-1c2b76cd26ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2077&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="main-image"
            src="https://images.unsplash.com/photo-1556005693-00fff02f134c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" 
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="main-image"
            src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2217&q=80"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="main-image"
            src="https://images.unsplash.com/photo-1580136579395-4bbb9ffdc4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2820&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="main-image"
            src="https://images.unsplash.com/photo-1579541591970-e5780dc6b31f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2843&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </motion.div>
    );
  }
  
export default First