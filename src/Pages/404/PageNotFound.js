import React from 'react';
import notFound from '../../assets/images/404.jpg';

const PageNotFound = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ background: `url(${notFound})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold uppercase">Page Not Found</h1>
                        <button class="btn btn-ghost btn-outline btn-lg">Go Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;