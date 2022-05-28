import React from 'react';
import notFound from '../../assets/images/404.jpg';

const PageNotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ background: `url(${notFound})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">Page Not Found</h1>
                        <button className="btn btn-ghost btn-outline btn-lg">Go Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;