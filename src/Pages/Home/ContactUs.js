import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="hero bg-base-200 my-10">
                <div className="hero-content">
                    <div className='card p-10'>
                        <h2 className='text-4xl font-bold text-center mb-3' >Contact Us</h2>
                        <h1 className="text-3xl text-center">Stay connected with us</h1>
                        <div className="mt-10">
                            <div className="form-control">
                                <input type="email" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control my-5">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea" rows="10" cols="50" placeholder="Your message"></textarea>
                            </div>
                            <div className="card-actions justify-center my-5">
                                <button className="btn btn-wide btn-primary">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;