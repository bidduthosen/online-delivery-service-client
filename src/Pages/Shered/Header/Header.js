import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li>
            <Link to='/'>Home</Link>
            <Link to="/blog">blog</Link>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 py-4 position: sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <img className='h-16' src="https://i.ibb.co/f9YQLqt/nav.png" alt="" />
                <h1 className="normal-case text-3xl px-3 font-bold">Online Delivery Service</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/register"><button className="btn btn-active mr-2">Register</button></Link>
                <Link to="/login"><button className="btn btn-active">login</button></Link>
            </div>
        </div>
    );
};

export default Header;