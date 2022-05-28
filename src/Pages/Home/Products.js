import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div className='my-10 p-10'>
            <p className='text-5xl text-center font-bold'>Auto Parts</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 p-4'>
                {
                    products.map(product => <ProductCard
                        key= {product._id}
                        product = {product}
                    />)
                }
            </div>
        </div>
    );
};

export default Products;