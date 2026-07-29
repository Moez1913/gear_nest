import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'
import useAxiosSecure from '../Axios/useAxiosSecure'
import useAuth from './Auth/useAuth'
import { shopContext } from '../../../Providers/ShoopProvider/ShoopProvider'

const UseCart = () => {
 
    
     const axiosSecure=useAxiosSecure()
     const {user}=useAuth()

    const {localCart,setLocalCart}=useContext(shopContext);
  
  const {data:cart=[],refetch}=useQuery({
    queryKey:['cart',user?.email],
    queryFn:async ()=>{
     const res= await axiosSecure.get(`/cart/${user.email}`)
     return res.data
    }
  })
  const cartItem= user? cart : localCart ;

  const productPrice=cartItem.reduce((total,item)=>{
 return  total+(item.price * item.quantity)
},0)
const quantity =cartItem.reduce((total,item)=>{
  return total+item.quantity
},0)
  
  return {cart,localCart,cartItem,setLocalCart,productPrice,quantity,refetch}
}

export default UseCart