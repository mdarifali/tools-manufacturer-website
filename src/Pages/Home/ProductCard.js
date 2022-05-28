import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, price, stock, img, rating } = product;

    return (
        <div>
            <div class="card card-compact bg-base-200 shadow-xl">
                <figure>
                    <img src={img} alt="#" />
                </figure>
                <div class="card-body">
                    <h1 class="card-title">{name}</h1>
                    <p className='text-xl font-bold'>Price: ${price}</p>
                    <p>Stock: {stock}</p>
                    <span>Ratings: {rating}</span>
                    <Link to={`/purchase/${product._id}`} class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
