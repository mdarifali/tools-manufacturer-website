import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div className='my-10 px-12'>
            <h1 className='text-4xl text-center'>Our Products {products.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 p-4'>
                {
                    products.map(product => <ProductCard 
                        product = {product}
                    />)
                }
            </div>
        </div>
    );
};

export default Products;