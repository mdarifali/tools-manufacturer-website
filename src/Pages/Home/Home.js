import React from 'react';
import Footer from '../Shared/Footer';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Products from './Products';

const Home = () => {
    return (
        <div className='my-10'>
           <Carousel />
           <Products />
           <BusinessSummary />
           <Footer />
        </div>
    );
};

export default Home;