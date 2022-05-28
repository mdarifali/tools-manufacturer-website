import React from 'react';
import myimage from '../../assets/images/my.jpg';

const MyPortfolio = () => {
    return (
        <div className='mt-20 p-10'>
            <div className="bg-base-100 shadow-xl flex">
                <figure><img src={myimage} className='flex-1 w-9/12' alt="Album" /></figure>
                <div className="card-body flex-1">
                    <h2 className="text-5xl font-bold">MD ARIF ALI</h2>
                    <h3 className='text-xl'>Front End Developer</h3>
                    <div className='border border-b-4 border-primary w-40'></div>
                    <div className=''>
                        <div className="card w-96 bg-gray-200 my-10">
                            <div className="card-body">
                                <h2 className='text-2xl font-bold mb-10'>SKILLS</h2>
                                <p>HTML</p>
                                <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
                                <p>Vanila CSS</p>
                                <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
                                <p>Bootstrap Framework</p>
                                <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
                                <p>Tailwind Framework</p>
                                <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
                                <p>Vanila JS</p>
                                <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
                                <p>Reacj JS</p>
                                <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
                                <p>MongoDB</p>
                                <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
                                <p>Node Express</p>
                                <div className='card-body text-center'>
                                    <p>Phone: 017290-123784</p>
                                    <p>email: arif.raj2050@gmail.com</p>
                                    <button className='btn btn-ghost btn-outline mt-5'><a href="https://github.com/mdarifali">Github Profile</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;