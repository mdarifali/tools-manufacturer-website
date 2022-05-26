import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../../FirebaseAuth';
import Loading from '../../Shared/Loading';

const AddReviews = () => {
    const [user, loading] = useAuthState(auth);
    let [rating, setRating] = useState();

    const handleRanting = e => {
        setRating(e.target.value)
    }

    if (loading) {
        <Loading />
    }

    const hnadleReview = (event) => {
        event.preventDefault();

        const ReviewDetails = {
            rating: event.target.rating.value,
            message: event.target.message.value,
            email: user.email,
            user: user.displayName,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ReviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations! Your Review is Sumited',
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
                        <h1 className='text-center text-4xl uppercase mb-10'>Review Submit</h1>
                        <form onSubmit={hnadleReview} class="card shadow-2xl bg-base-100">

                            <div class="card-body gap-6">
                                <div class="form-control w-96">
                                    <input
                                        type="text"
                                        value={user?.displayName}
                                        placeholder="Name"
                                        required
                                        disabled
                                        class="input input-bordered input-success" />
                                </div>
                                <div class="form-control w-96">
                                    <input
                                        type="email"
                                        value={user?.email}
                                        placeholder="email"
                                        required
                                        disabled
                                        class="input input-bordered input-success" />
                                </div>
                                <div class="form-control w-96">
                                    <input
                                        type="number"
                                        name='ating'
                                        placeholder="Rating 1 to 5"
                                        value={rating}
                                        required
                                        class="input input-bordered input-success"
                                        onChange={handleRanting}
                                    />
                                    {
                                        rating <= 0 && <span className='text-gray-200 mt-2'>Rating 1 to 5</span>
                                    }
                                    {
                                        rating > 5 && <span className='text-gray-200 mt-2'>Rating 1 to 5</span>
                                    }
                                </div>
                                <div class="form-control w-96">
                                    <textarea
                                        type='text'
                                        name='message'
                                        className="textarea textarea-success"
                                        required
                                        placeholder="Your Review">
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

export default AddReviews;