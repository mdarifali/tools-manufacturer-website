import React, { useEffect, useState } from 'react';
import usericon from '../../assets/icons/user-2.svg';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseAuth'
import Loading from '../Shared/Loading';
import Swal from 'sweetalert2';


const Purchase = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(0);


    if (loading) {
        <Loading />
    }

    const handleIncrement = () => {
        const previousQuantiy = parseFloat(quantity);
        setQuantity(previousQuantiy + 1);
    }

    const handleDeincrement = () => {
        const previousQuantiy = parseFloat(quantity);
        setQuantity(previousQuantiy - 1);
    }

    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    useEffect(() => {
        const url = `https://radiant-plains-16562.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);


    const hnadleCart = (e) => {
        e.preventDefault();
        const newPrice = parseFloat(product.price);
        const updatePrice = quantity * newPrice;

        const orderDetails = {

            name: product.name,
            price: updatePrice,
            quantity: quantity,
            img: product.img,
            phone: e.target.phone.value,
            address: e.target.address.value,
            email: user.email,
            user: user.displayName,
        }

        fetch('https://radiant-plains-16562.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations! your order is confirm. Please go to order page',
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            })

    }


    return (
        <div className='mt-20'>
            <div className="navbar bg-base-200">
                <div className="flex-1 px-7">
                    <span className='text-xl'>Product id: {id}</span>
                </div>
                <div className="flex-none gap-5">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item"></span>
                            </div>
                        </label>
                        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <Link to='/dashboard/myorders' className="btn btn-primary btn-block">View Order</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={usericon} alt='#' />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <div className='text-center'>
                                <p className='text-2xl'>{user.displayName}</p>
                                <p className='text-xl text-red-400'>{user.email}</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-200 rounded-none shadow-xl gap-5 p-10">
                <figure>
                    <img className='rounded-2xl lg:w-11/12' src={product.img} alt="Album" />
                </figure>
                <div className="card-body">
                    <h1 className="card-title text-3xl">{product.name}</h1>
                    <div className='my-3'>
                        <p className='w-96'>Description: {product.description}</p>
                    </div>
                    <span className='text-5xl font-bold my-3'>${product.price}</span>
                    <span>Stock: {product.stock}</span>
                    <span>Ratings: {product.rating}</span>
                    <span className='text-opacity-5'>Min. Order (5 Pieces)</span>
                    <span>Max. Order (50 Pieces)</span>
                    <div className='flex items-center gap-2 my-5'>
                        <button className="btn btn-success btn-outline btn-circle" onClick={handleIncrement}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 37 64">
                                <path d="M35.2 28.8q1.92 0 1.92 3.2t-1.92 3.2h-13.44v13.44q0 1.92-3.2 1.92t-3.2-1.92v-13.44h-13.44q-1.92 0-1.92-3.2t1.92-3.2h13.44v-13.44q0-1.92 3.2-1.92t3.2 1.92v13.44h13.44z"></path>
                            </svg>
                        </button>
                        <input
                            className='input input-bordered input-success rounded-full text-center w-32'
                            type="number"
                            value={quantity}
                            onChange={handleChange}
                        />
                        <button className="btn btn-success btn-outline btn-circle" onClick={handleDeincrement}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 37 64">
                                <path d="M35.2 28.8q1.92 0 1.92 3.2t-1.92 3.2h-33.28q-1.92 0-1.92-3.2t1.92-3.2h33.28z"></path>
                            </svg>
                        </button>
                        {
                            quantity <= 4 && <span className='text-red-400'>min order 5 unit</span>
                        }
                        {
                            quantity >= 51 && <span className='text-red-400'>max order 50 unit</span>
                        }
                        {
                            product.stock < quantity && <span className='text-red-400'>now available stock only {product.stock} !</span>
                        }
                    </div>
                    <form onSubmit={hnadleCart}>
                        <div className="form-control">
                            <input type="text" name='phone' required placeholder="Phone Number" className="input input-success w-72" />
                        </div>
                        <div className="form-control my-3">
                            <textarea name='address' required className="textarea input-success w-72" placeholder="Enter Delivery Address"></textarea>
                        </div>
                        <div className="card-actions mt-4">
                            <button disabled={quantity <= 4 || quantity >= 51 || product.stock < quantity} className="btn btn-success">Check Out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;