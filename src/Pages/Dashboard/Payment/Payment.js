import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1soMJrl1J4OiD0cvNcwtxlxtqEFOvLSEFRGK9xpnohDHR2ekT16rhpKMsajwBAYgb5RiqGpSP6qS0Y6RWqkotE00jnWyIDjR');

const Payment = () => {
    const { id } = useParams();
    const url = `https://radiant-plains-16562.herokuapp.com/orders/${id}`

    const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {

        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }


    return (
        <div className='p-10'>
            <h1 className='text-3xl my-5'>YOUR ORDER</h1>
            <div className='card lg:w-5/12 m-auto'>
                <div className="card-body bg-emerald-100 ">
                    <h2 className=" text-2xl font-bold">{orders.name}</h2>
                    <p>Id: {orders._id}</p>
                    <p>Total Price: {orders.price}</p>
                </div>
                <div className="card-body bg-base-100">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;