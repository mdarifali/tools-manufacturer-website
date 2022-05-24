import React from 'react';
import customer from '../../assets/icons/customer-management-3.svg'
import award from '../../assets/icons/award-badge.svg'
import smartphones from '../../assets/icons/hand-and-phone-svgrepo-com.svg';
import handshake from '../../assets/icons/handshake-deal-svgrepo-com.svg';

const BusinessSummary = () => {
    return (
        <div class="card my-10 bg-base-200">
            <div class="card-body">
                <h2 class="text-center text-4xl font-bold uppercase my-5">Successes Of Bussiness</h2>
                <p className='text-center'>We are providing lots of product, customer good reviews and customer service</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-5 p-10'>
                <div class="card-body flex justify-center items-center bg-red-300 rounded-2xl shadow-xl">
                    <h1 className='text-3xl'>1000+</h1>
                    <h1 className='text-3xl font-bold'>Clients</h1>
                    <img class="w-16" src={customer} alt="" />
                </div>
                <div class="card-body flex justify-center items-center bg-red-300 rounded-2xl shadow-xl">
                    <h1 className='text-3xl'>1200+</h1>
                    <h1 className='text-3xl font-bold'>Products</h1>
                    <img class="w-16" src={smartphones} alt="" />
                </div>
                <div class="card-body flex justify-center items-center bg-red-300 rounded-2xl shadow-xl">
                    <h1 className='text-3xl'>500+</h1>
                    <h1 className='text-3xl font-bold'>Reviews</h1>
                    <img class="w-16" src={award} alt="" />
                </div>
                <div class="card-body flex justify-center items-center bg-red-300 rounded-2xl shadow-xl">
                    <h1 className='text-3xl'>1000+</h1>
                    <h1 className='text-3xl font-bold'>Orders</h1>
                    <img class="w-16" src={handshake} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;