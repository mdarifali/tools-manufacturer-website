import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../FirebaseAuth';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;

        if (user) {

            const url = `https://radiant-plains-16562.herokuapp.com/orders`;
            fetch(url, {
                method: 'GET',
                headers: {
                    "authorization": `${email} ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }

    }, [user]);

    return (
        <div className='p-10'>
            <h1 className='text-center text-4xl uppercase py-5'>Manage All Products</h1>
            <div className="overflow-x-auto w-full">

                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>User</th>
                            <th>User Email</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>{order.user}</span>
                                    </td>
                                    <td>
                                        <span>{order.email}</span>
                                    </td>
                                    <td>
                                        <span>${order.price}</span>
                                    </td>
                                    <td>
                                        <span>{order.quantity}</span>
                                    </td>
                                    <th>
                                        {(order.price && !order.paid) && <div className="badge badge-warning">Unpaid</div>}
                                        {(order.price && order.paid) &&
                                            <div>
                                                <p><span className='badge badge-success'>Paid</span></p>
                                            </div>
                                        }
                                    </th>
                                    <th>
                                        <button className="btn btn-primary btn-xs">Delete</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>User</th>
                            <th>User Email</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;