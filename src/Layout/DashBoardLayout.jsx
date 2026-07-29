import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
  return (
   <div className='grid grid-cols-8'>
     <div className='grid col-span-2'>
        
        <Link to='/cart'>My Cart</Link>
        <Link>My Order</Link>
        <Link>Payment History</Link>
        <Link>My Profile</Link>
        <Link>LogOut</Link>
        <Link>Home</Link>

        <Link>Orders</Link>
        <Link>Add Product</Link>
        <Link>UpdateProduct</Link>
        <Link>All Product</Link>
        <Link>Sells</Link>
        <Link>Home</Link>
        <Link>my</Link>
    </div>
    <div className='grid col-span-6'>
        <Outlet></Outlet>
    </div>
   </div>
  )
}

export default DashBoardLayout