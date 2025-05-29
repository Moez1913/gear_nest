import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import ThemeToggle from './ThemeToggle';
import { CiLight } from 'react-icons/ci';
import { MdNightlight } from 'react-icons/md';

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handelLogOut = () => {
        userLogOut()
            .then(() => {
                toast.info('You are SignOut!');
            })
            .catch(error => {
                console.log(error);
            });
    };

    // NavLink style for active tab
    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-blue-700 font-bold underline"
            : "text-sm text-black-200";

    return (
        <nav className="bg-slate-400 shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img className="w-12 h-12" src="/assets/Gear_nestLogo.png" alt="Logo" />
                        <h2 className="text-2xl font-bold">GearNest</h2>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-4 items-center">
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
                        {user && (
                            <>
                                <NavLink to="/all" className={navLinkClass}>All Equipment</NavLink>
                                <NavLink to="/add" className={navLinkClass}>Add Equipment</NavLink>
                                <NavLink to="/my" className={navLinkClass}>My Equipment</NavLink>
                            </>
                        )}
                    </div>
                    {/* Theme Toggle (desktop) */}
                    <div className="hidden md:flex items-center ml-4">
                       <CiLight/>  <ThemeToggle /> <MdNightlight />
                    </div>
                    {/* User Section */}
                    <div className="hidden md:flex items-center gap-3">
                        {user ? (
                            <>
                                <div className="relative group">
                                    <img
                                        src={user.photoURL}
                                        className="h-10 w-10 rounded-full border-2 border-blue-600 cursor-pointer"
                                        title={user.displayName}
                                        alt="User"
                                    />
                                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                                        {user.displayName || user.email}
                                    </span>
                                </div>
                                <button onClick={handelLogOut} className="btn btn-outline btn-primary flex items-center gap-1">
                                    Signout
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="btn btn-outline btn-primary">Login</Link>
                        )}
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        {/* Theme Toggle (mobile) */}
                        <ThemeToggle />
                        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none ml-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-slate-300 px-4 pb-4">
                    <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/blog" className={navLinkClass} onClick={() => setMenuOpen(false)}>Blog</NavLink>
                    {user && (
                        <>
                            <NavLink to="/all" className={navLinkClass} onClick={() => setMenuOpen(false)}>All Equipment</NavLink>
                            <NavLink to="/add" className={navLinkClass} onClick={() => setMenuOpen(false)}>Add Equipment</NavLink>
                            <NavLink to="/my" className={navLinkClass} onClick={() => setMenuOpen(false)}>My Equipment</NavLink>
                        </>
                    )}
                    <div className="mt-2">
                        {user ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <img
                                        src={user.photoURL}
                                        className="h-8 w-8 rounded-full border-2 border-blue-600"
                                        alt="User"
                                    />
                                    <span className="text-xs">{user.displayName || user.email}</span>
                                </div>
                                <button onClick={() => { handelLogOut(); setMenuOpen(false); }} className="btn btn-outline btn-primary mt-2 w-full">
                                    Signout
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="btn btn-outline btn-primary mt-2 w-full" onClick={() => setMenuOpen(false)}>
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
            <ToastContainer />
        </nav>
    );
};

export default Navbar;