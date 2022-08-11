import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentFormContainer, FormContainer, PayNowButton } from './PaymentForm.styles'


const PaymentForm = () => {

    const[cartTotal, setCartTotal] = useState(0)
    const[cartItems, setCartItems] = useState([])
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

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


    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({cartTotal: cartTotal * 100})
        }).then(res => res.json());

        const clientSecret = response.paymentIntent.client_secret
        console.log(clientSecret)

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
            billing_details: {
                name: 'Guest',
              },
          });

          setIsProcessingPayment(false);

          if (paymentResult.error) {
            alert(paymentResult.error.message);
          } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
              alert('Payment Successful!');
            }
          }      
     }

     const checkoutClick = function(event) {
    axios.delete('https://e-commerce-earth.herokuapp.com/cart')
    setCartTotal(0)

}

  return (

    <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment</h2>
            <CardElement />
            <PayNowButton onClick={checkoutClick} disabled={isProcessingPayment} className='pay-now-button'>Pay Now</PayNowButton>
        </FormContainer>
    </PaymentFormContainer>

  )
}

export default PaymentForm