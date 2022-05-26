import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom';
import auth from '../../FirebaseAuth';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className='bg-slate-400 mt-20'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content text-center">
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-5 overflow-y-auto w-72 bg-accent text-white gap-3">
                        {/* <!-- Sidebar content here --> */}

                        <li><Link to='/dashboard'>My Dashboard</Link></li>
                        <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        { admin && <li><Link to='/dashboard/allusers'>All Users</Link></li>}
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;