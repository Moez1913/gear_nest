import { createContext, useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../components/Hooks/Axios/useAxiosPublic";
import { AuthContext } from "../AuthProvider";
import useAxiosSecure from "../../components/Hooks/Axios/useAxiosSecure";



export const shopContext = createContext(null);

const ShoopProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [localCart,setLocalCart]=useState([]) 


 


     useEffect(()=>{
    const gestcart=JSON.parse(localStorage.getItem('cart'))
    setLocalCart(gestcart)
  },[]) 
  const shopInfo = {
    
    localCart,
    setLocalCart
  };
  return (
    <shopContext.Provider value={shopInfo}>{children}</shopContext.Provider>
  );
};

export default ShoopProvider;
