import "./Order.scss"
import { motion } from "framer-motion"
import {pageAnimation} from "../../Animation"
import axios from 'axios'
import { useEffect, useState } from 'react'
import {FaTrashAlt} from "react-icons/fa"
import PaymentForm from "../../components/payment-form/PaymentForm"


const Order = () => {

    const[cartItems, setCartItems] = useState([])
    const[cartTotal, setCartTotal] = useState(0)

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

const removeClick = function(event) {
    let itemId = event.target.getAttribute('id')
    axios.delete(`https://e-commerce-earth.herokuapp.com/cart/${itemId}`)
  }

return (

    <div className='order'>
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='checkout-container'>
            <p className="checkout-title">We hope to see you back here soon...</p>
            <div className="details">
            {cartItems.map((cartItem, index) => (
                <ul className="each-item">
                    <img className="order-image" src={cartItem.items.imageUrl} alt="art"></img>
                    <ul className="info">{cartItem.items.name}</ul>
                    <ul className="info">{cartItem.items.quantity}</ul>
                    <ul className="info">${cartItem.items.price}</ul>
                    <FaTrashAlt className="remove-checkout" onClick={removeClick} id={cartItem._id}></FaTrashAlt>
                </ul>
            ))}
            </div>
            <p className="total">Total Due: ${cartTotal}</p>
            <PaymentForm className="payment-form" />
        </motion.div>
        
    </div>

  )
}

export default Order