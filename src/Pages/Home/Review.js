import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import usericon from '../../assets/icons/user-3.svg';
import auth from '../../FirebaseAuth';

const Review = () => {
    const [user] = useAuthState(auth);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
       

        if (user) {
            const url = `http://localhost:5000/reviews`;
            fetch(url, {

                method: 'GET',
                headers: {
                    "authorization": `${user.email} ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setReviews(data));
        }

    }, [user])

    return (
        <div className='card my-10'>
            <p className='text-5xl text-center font-bold'>What Our Customers Are Saying</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 p-10'>
                {
                    reviews.map(review =>
                        <div key={review._id} class="card bg-base-200 shadow-xl">
                            <div class="card-body flex justify-center items-center">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                        <img src={usericon} alt='user' />
                                    </div>
                                </div>
                                <h2 class="card-title">{review.user}</h2>
                                <span>Rating ({review.rating ? review.rating : <span>no rating found</span>})</span>
                                <div>
                                    <div class="rating rating-md">
                                        {
                                            (review.rating == 5) && 
                                            <>
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                            </>
                                            
                                        }
                                        
                                        {
                                            (review.rating == 4) && 
                                            <>
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-gray-300" />
                                                
                                            </>
                                            
                                        }
                                        {
                                            (review.rating == 3) && 
                                            <>
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-gray-300" />
                                                <input name="rating-5" class="mask mask-star-2 bg-gray-300" />
                                                
                                            </>
                                            
                                        }
                                        {
                                            (review.rating == 2) && 
                                            <>
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-gray-300" />
                                                <input name="rating-5" class="mask mask-star-2 bg-gray-300" />
                                                <input name="rating-5" class="mask mask-star-2 bg-gray-300" />
                                                
                                            </>
                                            
                                        }
                                        {
                                            (review.rating == 1) && 
                                            <>
                                                <input name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                                <input name="rating-5" class="mask mask-star-2 bg-gray-300" />
                                                <input name="rating-5" class="mask mask-star-2 bg-gray-300" />
                                                <input name="rating-5" class="mask mask-star-2 bg-gray-300" />
                                                <input name="rating-5" class="mask mask-star-2 bg-gray-300" />
                                                
                                            </>
                                            
                                        }
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <p>{review.message}</p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Review;