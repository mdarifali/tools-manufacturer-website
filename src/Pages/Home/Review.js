import React, { useEffect, useState } from 'react';
import usericon from '../../assets/icons/user-3.svg';
import Loading from '../Shared/Loading';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = `https://radiant-plains-16562.herokuapp.com/reviews`;
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            });

    }, [])

    return (
        <div className='card my-10'>
            <p className='text-5xl text-center font-bold'>What Our Customers Are Saying</p>
            {loading ? <Loading /> :
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 p-10'>
                    {
                        reviews.map(review =>
                            <div key={review._id} className="card bg-base-200 shadow-xl">
                                <div className="card-body flex justify-center items-center">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                            <img src={usericon} alt='user' />
                                        </div>
                                    </div>
                                    <h2 className="card-title">{review.user}</h2>
                                    <span>Rating ({review.rating ? review.rating : <span>no rating found</span>})</span>
                                    <div>
                                        <div className="rating rating-md">
                                            {
                                                (review.rating == 5) &&
                                                <>
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </>

                                            }

                                            {
                                                (review.rating == 4) &&
                                                <>
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-gray-300" />

                                                </>

                                            }
                                            {
                                                (review.rating == 3) &&
                                                <>
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-gray-300" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-gray-300" />

                                                </>

                                            }
                                            {
                                                (review.rating == 2) &&
                                                <>
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-gray-300" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-gray-300" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-gray-300" />

                                                </>

                                            }
                                            {
                                                (review.rating == 1) &&
                                                <>
                                                    <input name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-gray-300" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-gray-300" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-gray-300" />
                                                    <input name="rating-5" className="mask mask-star-2 bg-gray-300" />

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
            }
        </div>
    );
};

export default Review;