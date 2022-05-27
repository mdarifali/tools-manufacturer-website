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
            stock: event.target.stock.value,
            rating: event.target.rating.value,
            img: event.target.img.value,
            description: event.target.description.value

        }

        fetch('http://localhost:5000/products', {
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
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 className='text-center text-4xl uppercase mb-10'>Add New Product</h1>
                        <form onSubmit={hnadleAddProduct} class="card shadow-2xl bg-base-100">

                            <div class="card-body gap-6">
                                <div class="form-control w-96">
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        name='name'
                                        required
                                        class="input input-bordered input-success" />
                                </div>
                                <div class="form-control w-96">
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        name='price'
                                        required
                                        class="input input-bordered input-success" />
                                </div>
                                <div class="form-control w-96">
                                    <input
                                        type="number"
                                        placeholder="Stock"
                                        name='stock'
                                        required
                                        class="input input-bordered input-success" />
                                </div>
                                <div class="form-control w-96">
                                    <input
                                        type="number"
                                        name='rating'
                                        placeholder="Rating"
                                        required
                                        class="input input-bordered input-success"
                                    />
                                </div>
                                <div class="form-control w-96">
                                    <input
                                        type="text"
                                        name='img'
                                        placeholder="Product Image Url"
                                        required
                                        class="input input-bordered input-success"
                                    />
                                </div>
                                <div class="form-control w-96">
                                    <textarea
                                        type='text'
                                        name='description'
                                        className="textarea textarea-success"
                                        required
                                        placeholder="Prouct Description">
                                    </textarea>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">SUBMIT</button>
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