import React from 'react';
import banner from '../../assets/images/Banner.jpg';


const carousel = () => {
    return (
        <div className='card shadow-lg p-10'>
            <div class="carousel rounded-box">
            <div class="carousel-item">
                <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2" alt="Burger" />
            </div>
            <div class="carousel-item">
                <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB" alt="Burger" />
            </div>
            <div class="carousel-item">
                <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6" alt="Burger" />
            </div>
            <div class="carousel-item">
                <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693" alt="Burger" />
            </div>
            <div class="carousel-item">
                <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7" alt="Burger" />
            </div>
            <div class="carousel-item">
                <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=BDC01094" alt="Burger" />
            </div>
            <div class="carousel-item">
                <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=7F5AE56A" alt="Burger" />
            </div>
        </div>
        </div>
    );
};

export default carousel;