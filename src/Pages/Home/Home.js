import React from 'react';
import Footer from '../Shared/Footer';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';

const Home = () => {
    return (
        <div className='my-10'>
           <Carousel />
           <BusinessSummary />
           <Footer />
        </div>
    );
};

export default Home;