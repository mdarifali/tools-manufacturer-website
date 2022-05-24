import React from 'react';
import Footer from '../Shared/Footer';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Products from './Products';
import Review from './Review';

const Home = () => {
    return (
        <div className=''>
           <Carousel />
           <Products />
           <BusinessSummary />
           <Review />
           <Footer />
        </div>
    );
};

export default Home;