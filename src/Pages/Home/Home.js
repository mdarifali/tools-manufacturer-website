import React from 'react';
import Footer from '../Shared/Footer';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';

const Home = () => {
    return (
        <div>
           <Carousel />
           <BusinessSummary />
           <Footer />
        </div>
    );
};

export default Home;