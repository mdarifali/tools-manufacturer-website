import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../../FirebaseAuth';
import Loading from '../../Shared/Loading';
const AddProduct = () => {

    const [user, loading] = useAuthState(auth);
    
    if (loading) {
        <Loading />
    }

    const hnadleAddProduct= (event) => {
        event.preventDefault();

        const productsDetails = {

            name: event.target.name.value,
            price: event.target.price.value,
            min: event.target.min.value,
            max: event.target.max.value,
            stock: event.target.stock.value,
            rating: event.target.rating.value,
            img: event.target.img.value,
            description: event.target.description.value

        }

        fetch('https://radiant-plains-16562.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productsDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations! New Product Added Successfuly',
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            })

        event.target.value = '';
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className='text-center text-4xl uppercase mb-10'>Add New Product</h1>
                        <form onSubmit={hnadleAddProduct} className="card shadow-2xl bg-base-100">

                            <div className="card-body gap-6">
                                <div className="form-control w-96">
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        name='name'
                                        required
                                        className="input input-bordered input-success" />
                                </div>
                                <div className="form-control w-96">
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        name='price'
                                        required
                                        className="input input-bordered input-success" />
                                </div>
                                <div className="form-control w-96">
                                    <input
                                        type="number"
                                        placeholder="Min. Order"
                                        name='min'
                                        required
                                        className="input input-bordered input-success" />
                                </div>
                                <div className="form-control w-96">
                                    <input
                                        type="number"
                                        placeholder="Max. Order"
                                        name='max'
                                        required
                                        className="input input-bordered input-success" />
                                </div>
                                <div className="form-control w-96">
                                    <input
                                        type="number"
                                        placeholder="Stock"
                                        name='stock'
                                        required
                                        className="input input-bordered input-success" />
                                </div>
                                <div className="form-control w-96">
                                    <input
                                        type="number"
                                        name='rating'
                                        placeholder="Rating"
                                        required
                                        className="input input-bordered input-success"
                                    />
                                </div>
                                <div className="form-control w-96">
                                    <input
                                        type="text"
                                        name='img'
                                        placeholder="Product Image Url"
                                        required
                                        className="input input-bordered input-success"
                                    />
                                </div>
                                <div className="form-control w-96">
                                    <textarea
                                        type='text'
                                        name='description'
                                        className="textarea textarea-success"
                                        required
                                        placeholder="Prouct Description">
                                    </textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SUBMIT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;