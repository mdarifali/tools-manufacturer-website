import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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

    }, [user, orders]);

    const cancelOrder = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to cancle this order!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                const url = `http://localhost:5000/orders/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            }
        })
    }


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
                                        {(order.price && !order.paid) &&
                                            <Link to={`/dashboard/payment/${order._id}`}>
                                                <button className='btn btn-xs btn-success'>pay</button>
                                            </Link>}
                                        {(order.price && order.paid) &&
                                            <div>
                                                <p><span className='text-success'>Paid</span></p>
                                                <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                            </div>
                                        }
                                    </th>
                                    <th>
                                        {!order.paid &&
                                            <button onClick={ () => cancelOrder (order._id)} class="btn btn-primary btn-xs">cancel</button>
                                        }
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