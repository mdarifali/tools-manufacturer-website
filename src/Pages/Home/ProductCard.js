import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, price, stock, img, rating, min, max } = product;

    return (
        <div>
            <div className="card card-compact bg-base-200 shadow-xl">
                <figure>
                    <img src={img} alt="#" />
                </figure>
                <div className="card-body">
                    <h1 className="card-title">{name}</h1>
                    <p className='text-xl font-bold'>Price: ${price}</p>
                    <p>Min. Order ({min} Pieces)</p>
                    <p>Max. Order ({max} Pieces)</p>
                    <p>Stock: {stock}</p>
                    <span>Ratings: {rating}</span>
                    <Link to={`/purchase/${product._id}`} className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
