import React from 'react';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import ContactUs from './ContactUs';
import GeneralQuestions from './GeneralQuestions';
import Products from './Products';
import Review from './Review';

const Home = () => {
    return (
        <div className=''>
            <Carousel />
            <Products />
            <Review />
            <BusinessSummary />
            <GeneralQuestions />
            <ContactUs />
        </div>
    );
};

export default Home;