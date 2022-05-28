import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/products`;
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setLoading(false)
        });
    }, [])

    return (
        <div className='my-10 p-10'>
            <p className='text-5xl text-center font-bold'>Auto Parts</p>
            {loading ? <Loading /> :
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 p-4'>
                {
                    products.slice(0, 6).map(product => <ProductCard
                        key= {product._id}
                        product = {product}
                    />)
                }
            </div>
            }
        </div>
    );
};

export default Products;