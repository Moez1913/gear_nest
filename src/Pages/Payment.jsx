import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckOutForm from './CheckOutForm'
 
const stripePromis=loadStripe('pk_test_51TlrG5RQH0kMVPeBi8M1Px47gpoCO6okqQo18lxlOcP8m9bHzPbn7X8Mcg183CAD7E9kxHft6j68o2pMMTsDMiL8009FIds5Gc')
const Payment = () => {
  return (
    <div>
       <div>
        <h1>Payment</h1>
       </div>
       <div>
        <Elements stripe={stripePromis}>
       <CheckOutForm></CheckOutForm>
        </Elements>
       </div>

    </div>
  )
}

export default Payment