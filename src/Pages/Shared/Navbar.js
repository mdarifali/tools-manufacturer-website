import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../FirebaseAuth';

const NavBar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const navItems = <>
        <li><Link className="" to='/'>Home</Link></li>
        <li><Link className="" to='/reviews'>Reviews</Link></li>
        <li><Link className="" to='/profile'>My Profile</Link></li>
        {
            user && <li><Link to="/orders">Orders</Link></li>
        }
        {
            user && <li><Link to="/purchase">Purchase</Link></li>
        }
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li><Link className="" to='/Portfolio'>My Portfolio</Link></li>
        <li><Link className="" to='/blogs'>Blogs</Link></li>
        <li className='my-3'>
            {
                user ? <button onClick={logout} className='btn btn-outline text-red-400'>Sing Out</button> :
                    <Link to='/login'>Login</Link>
            }
        </li>
    </>

    return (
        <div className="navbar bg-base-100 px-12 fixed top-0 inset-x-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeilnejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content text-accent mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='mb-2'><Link to='/'>Home</Link></li>
                        <li className='mb-1'><Link to='/reviews'>Reviews</Link></li>
                        <li className='mb-1'><Link to='/profile'>My Profile</Link></li>
                        <li className='mb-1'><Link to='/blogs'>Blogs</Link></li>
                        {
                            user && <li><Link to="/dashboard">Dashboard</Link></li>
                        }
                        <li className='my-3'>
                            {
                                user ? <button onClick={logout} className='btn btn-outline text-red-400'>Sing Out</button> :
                                    <Link to='/login'>Login</Link>
                            }
                        </li>
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Car Parts</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;