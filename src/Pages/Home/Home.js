import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import ContactUs from './ContactUs';
import Products from './Products';
import Review from './Review';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Products />
            <BusinessSummary />
            <Review />
            <Carousel />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;