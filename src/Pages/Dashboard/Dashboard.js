import React from 'react';
import adminDash from '../../assets/icons/admin.svg'
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
                    <ul class="menu p-5 overflow-y-auto w-72 bg-accent text-white gap-4">
                        <div className='flex justify-start items-center border border-purple-700 p-2 gap-3'>
                            <img className='w-12' src={adminDash} alt="" />
                            <span 
                                className='text-center py-4'>{user.displayName}
                            </span>
                        </div>
                        {!admin &&
                            <>
                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                                <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                            </>
                        }
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        {admin &&
                            <>
                                <li><Link to='/dashboard/make-Admin'>Make Admin</Link></li>
                                <li><Link to='/dashboard/manage-orders'>Manage All Orders</Link></li>
                                <li><Link to='/dashboard/add-product'>Add New Product</Link></li>
                                <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;