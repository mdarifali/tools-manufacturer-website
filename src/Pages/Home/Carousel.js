import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../assets/images/slide-1.jpg';
import slide2 from '../../assets/images/slide-2.jpg';
import slide3 from '../../assets/images/slide-3.jpg';

const carousel = () => {


    return (
        <div className='pt-20'>
            <Carousel>
                <div className='relative'>
                    <img src={slide1} alt='#' />
                    <div className='absolute lg:top-40 lg:left-60 xs:hiden'>
                        <div className='text-left'>
                            <span className='font-bold text-warning'>GET UPTO</span>
                            <p className='text-4xl font-bold text-red-500'> 33% OFF <br /> FOR ALL PRODUCTS</p> <br />
                            <button className='btn btn-primary mt-5'>GET STARTED</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={slide2} alt='#' />
                    <div className='absolute lg:top-40 lg:left-60 xs:hiden'>
                        <div className='text-left'>
                            <span className='font-bold text-warning'>GET UPTO</span>
                            <p className='text-4xl font-bold text-red-500'> 33% OFF <br /> FOR ALL PRODUCTS</p> <br />
                            <button className='btn btn-primary mt-5'>GET STARTED</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={slide3} alt='#' />
                    <div className='absolute lg:top-40 lg:left-60 xs:hiden'>
                        <div className='text-left'>
                            <span className='font-bold text-warning'>GET UPTO</span>
                            <p className='text-4xl font-bold text-red-500'> 33% OFF <br /> FOR ALL PRODUCTS</p> <br />
                            <button className='btn btn-primary mt-5'>GET STARTED</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default carousel;