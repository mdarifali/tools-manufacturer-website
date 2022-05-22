import React from 'react';

const ProductCard = ({ product }) => {
    const { name, price, stock, img, ratings } = product;

    return (
        <div>
            <div class="card w-96 card-compact bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="#" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Stock: {stock}</p>
                <span>Ratings: {ratings}</span>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;
