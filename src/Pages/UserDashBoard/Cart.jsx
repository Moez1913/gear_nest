import React, {  useEffect, useState } from "react";
import UseCart from "../../components/Hooks/Shop/UseCart";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { axiosSecure } from "../../components/Hooks/Axios/useAxiosSecure";
import { toast } from "react-toastify";
import useAuth from "../../components/Hooks/Shop/Auth/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Cart = () => {
  const {cart,localCart,cartItem,setLocalCart,productPrice,quantity,refetch} = UseCart();
  const {user}=useAuth()
  
// <<<Update quantity>>>>
  const updateQuantity = (id, type, quantity) => {
  
    let newquantity = quantity;
   
    if (type === "plus") {
      if (quantity === 5) {
        toast.info("Maximum Reached", {
          autoClose: 500,
        });
        return;
      }
      newquantity++;
    } else if (type === "minus") {
      if (quantity === 1) {
        toast.info("Quintity cannot be 0");
        return;
      }
      newquantity--;
    }
    if(user){
      axiosSecure.patch(`/carts/${id}`, { quantity: newquantity }).then((res) => {
      refetch();
    });
    }else{
  const updatedCart=localCart.map(item=>{
    if(item._id!==id){
      return item
    }
    return{
      ...item,
      quantity:newquantity
    }
  })
  setLocalCart(updatedCart)
  localStorage.setItem('cart',
    JSON.stringify(updatedCart)
  )
  Swal.fire({
      icon: "success",
      title: "quantity updated!",
      text: "Product removed from cart.",
      timer: 1200,
      showConfirmButton: false,
    });
    }
    
  };

// <<romove product from cart>>>>

  const handleRemove=(id)=>{
    
    if(user){
     axiosSecure.delete(`/carts/${id}`)
    .then(res=>{
      console.log(res.data)
      refetch()
    })
    }else{
      const updatedCart= localCart.filter(item=> item._id !== id)
      setLocalCart(updatedCart);
       localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
      
    );
   

     Swal.fire({
      icon: "success",
      title: "Removed!",
      text: "Product removed from cart.",
      timer: 1200,
      showConfirmButton: false,
    });

    }
   
  }


//<<< calculte cart price for cheakout>>>>



  return (
    <div className="grid grid-cols-6 ">
      <div className="grid col-span-4 mt-10">
        <div className="flex flex-col  justify-center p-4 gap-4 bg-base-100 rounded-box shadow-lg">
          <h1 className="text-left text-4xl pl-1 font-bold">Cart</h1>
          {cartItem.map((product) => (
            <div
              key={product._id}
              className="grid grid-cols-4 gap-6 border-b-2 pb-2 border-stone-600 "
            >
              <div className=" grid grid-cols-2 col-span-3 ">
                <div className="flex  gap-2">
                  <img className="size-16 rounded-box" src={product.image} />
                  <h1 className="text-base font-medium">{product.itemName}</h1>
                </div>

                <div className="flex items-center justify-between h-10 w-20 p-1 border-2  border-green-300 gap-1">
                  <button
                    onClick={() =>
                      updateQuantity(product._id, "plus", product.quantity)
                    }
                    className="bg-slate-500"
                  >
                    <FaPlus />
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    onClick={() =>
                      updateQuantity(product._id, "minus", product.quantity)
                    }
                  >
                    <FaMinus />
                  </button>
                </div>
              </div>

              <div className="grid col-span-1">
                <button onClick={()=>handleRemove(product._id)} className=" flex gap-1 items-center text-red-600">
                  
                  <FaTrashAlt /> Remove
                </button>
                 <p>{productPrice}</p>
              </div>
             
            </div>
          ))}
        </div>
      </div>
      <div className="grid col-span-2">
        <h1>cheackout</h1>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>TotalPrice:{productPrice}</td>
        <td>quantity {quantity}</td>
        <td><Link to='/orderPage' className="btn btn-outline btn-success text-success">CheackOut</Link></td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default Cart;
