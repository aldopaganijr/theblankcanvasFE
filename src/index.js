import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"
import { CartProvider } from './contexts/CartContext';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe/Stripe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </CartProvider>
    </BrowserRouter>
  // {/* </React.StrictMode> */}
);

