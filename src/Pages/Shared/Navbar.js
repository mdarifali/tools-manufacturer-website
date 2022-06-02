import React from 'react';
import dashboard from '../../assets/icons/dashboard.svg'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../FirebaseAuth';

const NavBar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const navItems = <>

        <li><Link className="active" to='/'>Home</Link></li>
        <li className="hover-bordered"><Link to='/blogs'>Blogs</Link></li>
        <li className="hover-bordered"><Link to='/Portfolio'>My Portfolio</Link></li>
        {
            user ?
                <>
                    <li className="hover-bordered "><Link to="/dashboard">Dashboard</Link></li>
                    <li>
                        <button onClick={logout} className='btn btn-outline btn-warning'>Sing Out</button>
                    </li>
                </>
                : <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-100 fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-gray-300 rounded-box w-52 gap-1">
                        {navItems}
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Brandix</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-1 gap-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label htmlFor="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden">
                    <img src={dashboard} alt="" />
                </label>
            </div>
        </div>
    );
};

export default NavBar;