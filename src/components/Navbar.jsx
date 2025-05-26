import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {
    const{user,userLogOut}=useContext(AuthContext);
    const handelLogOut=()=>{
        userLogOut()
                .then(() => {
                console.log('sign out')
                 toast.info('You are SignOut!')
               
            })
            .catch(error => {
                console.log(error)
            })
             navigate('/')
    }
   
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
                <NavLink to='/my'><a className='text-sm text-black-200' href="">My Equipment</a></NavLink>


            </div>
            <div>

                {
                    user ? (
                        <div className=" flex items-center gap-3">
                            {/* User Photo with Tooltip */}
                            <div className="relative group">
                                <img
                                    src={user.photoURL}

                                    className="h-10 w-10 rounded-full border-2 border-blue-600 cursor-pointer"
                                    title={user.displayName}
                                />
                                {/* Tooltip on hover */}
                                <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                                    {user.displayName || user.email}
                                </span>
                            </div>
                            <button onClick={handelLogOut}  className="btn btn-outline btn-primary flex items-center gap-1">
                                 Signout
                            </button>
                        </div>
                    ) : (
                        <div className="navbar-end">
                            <button>
                                <Link to="/login" className="btn btn-outline btn-primary">Login</Link>
                            </button>
                        </div>
                    )
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;