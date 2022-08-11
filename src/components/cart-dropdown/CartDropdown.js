import React from 'react'
import "./CartDropdown.scss"
import {motion} from "framer-motion";
import { cartAnim } from '../../Animation';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import {AiFillRightCircle} from "react-icons/ai";
import {AiFillLeftCircle} from "react-icons/ai";
import {FaTrashAlt} from "react-icons/fa"


const CartDropdown = () => {
  const[cartItems, setCartItems] = useState([])
  const[cartTotal, setCartTotal] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://e-commerce-earth.herokuapp.com/cart')
    // axios.get('http://localhost:8000/cart')
      .then(res => {
        let data = res.data
        setCartItems(data)
        return data
      })
      .then((data) => {
        let cartArray = []
        for (let i=0; i < data.length; i+=1) {
          let price=data[i].items.price
          cartArray.push(price)
          let newSum = cartArray.reduce((a,b)=>a+b)
          setCartTotal(newSum)
        }
      })
      }, [cartItems])
  const goToOrderHandler = () => {
    navigate('/Order')
  }
  const plusClick = function(event) {
    let itemPlus = {"items.quantity":parseInt(event.target.getAttribute('quantity')) + 1}
    // console.log(itemQuantity)
    // let itemQuantity = cartItem.items.quantity + 1
    // let itemQuantity={"items.quantity": event.target.cartItems.items.quantity +1}
    let itemId = event.target.getAttribute('id')
    axios.patch(`https://e-commerce-earth.herokuapp.com/cart/${itemId}`, itemPlus)
  }
  const minusClick = function(event) {
    let itemMinus = {"items.quantity":parseInt(event.target.getAttribute('quantity')) - 1}
    // console.log(itemQuantity)
    // let itemQuantity = cartItem.items.quantity + 1
    // let itemQuantity={"items.quantity": event.target.cartItems.items.quantity +1}
    let itemId = event.target.getAttribute('id')
    axios.patch(`https://e-commerce-earth.herokuapp.com/cart/${itemId}`, itemMinus)
  }

  const removeClick = function(event) {
    let itemId = event.target.getAttribute('id')
    axios.delete(`https://e-commerce-earth.herokuapp.com/cart/${itemId}`)
  }
  // console.log(cartItems.items.img)
  return (
<>
    <motion.div exit="exit" variants={cartAnim} initial="hidden" animate="show" className='cart-dropdown-container'>
      <div className='checkout-items'>
      {cartItems.map((cartItem, index) => (
        <>
        <div className='single-item' key={index}>
          <img className='cart-image' src={cartItem.items.imageUrl} alt='test'></img>
          <p>{cartItem.items.name}, USD {cartItem.items.price}</p>
        </div>
        <p className='quantity'>
          <span className='left'>
            <AiFillLeftCircle
              onClick={minusClick}
              quantity={cartItem.items.quantity}
              id={cartItem._id}/>
          </span>
          {cartItem.items.quantity}
          <span className='right'>
            <AiFillRightCircle
              onClick={plusClick}
              quantity={cartItem.items.quantity}
              id={cartItem._id}/>
          </span>
          <span className='remove'>
            <FaTrashAlt onClick={removeClick} id={cartItem._id}>Remove</FaTrashAlt>
          </span>
        </p>
        </>
        ))}
      </div>
      <p className='total'>Cart Total: USD {cartTotal}</p>
      <button className='checkout-button' onClick={goToOrderHandler}>Checkout</button>
    </motion.div>
    </>
  )
}
export default CartDropdown