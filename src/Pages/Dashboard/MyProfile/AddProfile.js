import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProfile = () => {

    const hnadlProfile = event => {
        event.preventDefault();

        const productsDetails = {

            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            education: event.target.education.value,
            img: event.target.img.value,
            adderss: event.target.adderss.value

        }

        fetch('https://radiant-plains-16562.herokuapp.com/profile', {
            
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productsDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations! New Product Added Successfuly',
                        showConfirmButton: true,
                        timer: 3500
                    })
                }
            })


    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className='text-center text-4xl uppercase mb-10'>Add Your Profile</h1>
                    <form onSubmit={hnadlProfile} className="card shadow-2xl bg-base-100">

                        <div className="card-body gap-6">
                            <div className="form-control w-96">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    name='name'
                                    required
                                    className="input input-bordered input-success" />
                            </div>
                            <div className="form-control w-96">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name='email'
                                    required
                                    className="input input-bordered input-success" />
                            </div>
                            <div className="form-control w-96">
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    name='phone'
                                    required
                                    className="input input-bordered input-success" />
                            </div>
                            <div className="form-control w-96">
                                <input
                                    type="text"
                                    name='education'
                                    placeholder="Education"
                                    required
                                    className="input input-bordered input-success"
                                />
                            </div>
                            <div className="form-control w-96">
                                <textarea
                                    type='text'
                                    name='adderss'
                                    required
                                    className="textarea textarea-success"
                                    placeholder="Your Address">
                                </textarea>
                            </div>
                            <div className="form-control w-96">
                                <input
                                    type="text"
                                    name='img'
                                    placeholder="Social Profile Url"
                                    required
                                    className="input input-bordered input-success"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">SUBMIT</button>
                            </div>
                            <div className="form-control mt-2">
                                <Link to={`/dashboard/myprofile`}><button className="btn btn-ghost">Go Profile Page</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProfile;