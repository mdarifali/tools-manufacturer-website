import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../FirebaseAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;

        if (user) {

            const url = `http://localhost:5000/orders?email=${email}`;
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
            <h1 className='text-center text-4xl uppercase py-5'>Order Item List</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>Total Price</th>
                            <th>Total Quantity</th>
                            <th>Paymet</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" class="checkbox" />
                                        </label>
                                    </th>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div class="flex items-center space-x-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle w-12 h-12">
                                                    <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-bold">{order.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>${order.price}</span>
                                    </td>
                                    <td>
                                        <span>{order.quantity}</span>
                                    </td>
                                    <th>
                                        <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-warning btn-xs">Pay Now</button></Link>
                                    </th>
                                    <th>
                                        <button class="btn btn-primary btn-xs">Delete</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>Total Price</th>
                            <th>Total Quantity</th>
                            <th>Paymet</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;