import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import UseCart from "../components/Hooks/Shop/UseCart";
import useAxiosSecure from "../components/Hooks/Axios/useAxiosSecure";
import useAuth from "../components/Hooks/Shop/Auth/useAuth";

const CheckOutForm = () => {
  const {user}=useAuth()
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { productPrice } = UseCart();

  const [err,setErr]=useState('');
  const[clientSecret,setClientSecret]=useState('')

  useEffect(() => {
    if (productPrice > 0) {
      axiosSecure
        .post("/creat-payment-intent", { price: productPrice })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret)
        });
    }
  }, []);

  console.log(clientSecret)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);

    if (!stripe || !elements) {
      return;
    }
    // creating payment method:
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment Eroor", error);
      setErr(error);
    } else {
      console.log("payment method", paymentMethod);
      setErr(" ");
    }

    const {paymentIntent,eror,confirmError}= await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details:{
        email:user.email || "anonymous",
        name:user.displayName || 'anonymous'


      }
      }
      
    })
    if(confirmError){
      console.log('confirmError',confirmError)
    }else{
      console.log('paymentIntent',paymentIntent)
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button type="submit">submit</button>
    </form>
  );
};

export default CheckOutForm;
