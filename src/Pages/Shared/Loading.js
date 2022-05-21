import React from 'react';
import { SpinnerDotted } from 'spinners-react';

const Loading = () => {
    return (
        <div className="hero min-h-screen bg-gray-50">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <SpinnerDotted size={100} thickness={96} speed={114} color="#F32424" />
                    <h1 className='mt-2 text-xl font-bold text-orange-500'>Loading...</h1>
                </div>
            </div>
        </div>
    );
};

export default Loading;