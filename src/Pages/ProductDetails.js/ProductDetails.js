import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseAuth'
import Loading from '../Shared/Loading';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    let [quantity, setQuantity] = useState(0);
    const [user, loading] = useAuthState(auth);

    if(loading){
        <Loading />
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }
    const handleDeincrement = () => {
        setQuantity(quantity - 1);
    }
    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);


    const hnadleCart= () => {

        const orderDetails = {
            
            name: product.name,
            price: product.price,
            quantity: quantity,
            img: product.img,
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
                toast.success(`Your Order is confirm`,{
                    position: toast.POSITION.TOP_CENTER
                });
            }
            // else{
            //     toast.error(`Your Appointment is Already Booking on ${data.booking?.date} at ${data.booking?.slot}`,{
            //         position: toast.POSITION.TOP_CENTER
            //     });
            // }
            
        })

    }


    return (
        <div className='my-12'>
            <div class="card lg:card-side bg-base-100 shadow-xl gap-5 p-10">
                <figure>
                    <img src={product.img} alt="Album" />
                </figure>
                <div class="card">
                    <h2 class="card-title">{product.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Voluptas ipsum tempore ipsam illum! Praesentium odit laborum maiores, illo asperiores impedit.</p>
                    <span className='text-5xl'>${product.price}</span>
                    <p>Stock: {product.stock}</p>
                    <span>Ratings: {product.ratings}</span>
                    <p>Min Order: 5 pic</p>
                    <p>Max Order: 50 pic</p>
                    <div className='flex items-center gap-2 my-5'>
                        <button class="btn btn-primary btn-outline btn-circle" onClick={handleIncrement}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 37 64">
                                <path d="M35.2 28.8q1.92 0 1.92 3.2t-1.92 3.2h-13.44v13.44q0 1.92-3.2 1.92t-3.2-1.92v-13.44h-13.44q-1.92 0-1.92-3.2t1.92-3.2h13.44v-13.44q0-1.92 3.2-1.92t3.2 1.92v13.44h13.44z"></path>
                            </svg>
                        </button>
                        <input 
                            className='input input-bordered input-primary rounded-full text-center w-32' 
                            type="number" 
                            value={quantity}  
                            onChange={handleChange} 
                            />
                        <button class="btn btn-primary btn-outline btn-circle" onClick={handleDeincrement}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 37 64">
                                <path d="M35.2 28.8q1.92 0 1.92 3.2t-1.92 3.2h-33.28q-1.92 0-1.92-3.2t1.92-3.2h33.28z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="card-actions my-5">
                        <button onClick={hnadleCart}  class="btn btn-primary">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;