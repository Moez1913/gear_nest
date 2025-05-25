import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between justify-items-center   mx-auto mt-10 mb-10   bg-slate-400'>
           
               <div className='flex gap-2'>
                 <img className='w-16 h-14' src="/assets/Gear_nestLogo.png" alt="" />
                <h2 className='text-4xl font-bold'>GearNest</h2>
               </div>
            
            <div className='flex justify-between items-center justify-items-center gap-4 '>
                <NavLink to='/'><a className='text-sm text-black-200' href="">Home</a></NavLink>
                <NavLink to='/all'><a className='text-sm text-black-200' href="">All Equipment</a></NavLink>
                <NavLink to='/add'><a className='text-sm text-black-200' href="">Add Equipment</a></NavLink>
                <NavLink to='/'><a className='text-sm text-black-200' href="">My Equipment</a></NavLink>
              
                
            </div>
            <div>


            </div>
        </div>
    );
};

export default Navbar;