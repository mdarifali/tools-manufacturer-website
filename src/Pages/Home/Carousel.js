import React from 'react';
import slide1 from '../../assets/images/slide-1.jpg'
import slide2 from '../../assets/images/slide-2.jpg'
import slide3 from '../../assets/images/slide-3.jpg'

const Carousel = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full flex-col">
                    <div className='absolute transform -translate-y-1/2 left-40 top-1/2'>
                        <span class="mb-5 text-4xl font-bold bg-yellow-300 p-1">30% OFF</span>
                        <p class="text-5xl font-bold my-3">When Buying Parts</p>
                        <p className='text-5xl font-bold mb-4'>With Installation</p>
                        <button class="btn btn-secondary">Shop Now</button>
                    </div>
                    <img src={slide1} className="w-full" alt='#' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={slide3} class="w-full" alt='#' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={slide2} class="w-full" alt='#' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;