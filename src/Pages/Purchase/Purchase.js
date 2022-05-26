import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseAuth'
import Loading from '../Shared/Loading';
import Swal from 'sweetalert2';


const Purchase = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);

    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState();

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

    let perviousPrice = parseFloat(product.price);
    const newPrice = perviousPrice + quantity;

    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);


    const hnadleCart = (e) => {
        e.preventDefault();

        const orderDetails = {

            name: product.name,
            price: product.price,
            quantity: quantity,
            img: product.img,
            phone: e.target.phone.value,
            address: e.target.address.value,
            email: user.email,
            user: user.displayName,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
            <div class="card lg:card-side bg-base-200 shadow-xl gap-5 p-10">
                <figure>
                    <img className='rounded-2xl' src={product.img} alt="Album" />
                </figure>
                <div class="card-body px-5">
                    <h1 class="card-title text-2xl">{product.name}</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Voluptas ipsum tempore ipsam illum! Praesentium odit laborum maiores, illo asperiores impedit.</span>
                    <span className='text-5xl font-bold'>${product.price}</span>
                    <span>Stock: {product.stock}</span>
                    <span>Ratings: {product.ratings}</span>
                    <span className='text-opacity-5'>Min. Order (5 Pieces)</span>
                    <span>Max. Order (50 Pieces)</span>
                    <div className='flex items-center gap-2 my-5'>
                        <button class="btn btn-success btn-outline btn-circle" onClick={handleIncrement}>
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
                        <button class="btn btn-success btn-outline btn-circle" onClick={handleDeincrement}>
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
                        <div class="form-control">
                            <input type="text" name='phone' required placeholder="Phone Number" class="input input-success w-72" />
                        </div>
                        <div class="form-control my-3">
                            <textarea name='address' required class="textarea input-success w-72" placeholder="Enter Delivery Address"></textarea>
                        </div>
                        <div class="card-actions mt-4">
                            <button disabled={quantity <= 4 || quantity >= 51 || product.stock < quantity} class="btn btn-success">Check Out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;