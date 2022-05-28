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

        fetch('http://localhost:5000/profile', {
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
        <div class="hero min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 className='text-center text-4xl uppercase mb-10'>Add Your Profile</h1>
                    <form onSubmit={hnadlProfile} class="card shadow-2xl bg-base-100">

                        <div class="card-body gap-6">
                            <div class="form-control w-96">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    name='name'
                                    required
                                    class="input input-bordered input-success" />
                            </div>
                            <div class="form-control w-96">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name='email'
                                    required
                                    class="input input-bordered input-success" />
                            </div>
                            <div class="form-control w-96">
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    name='phone'
                                    required
                                    class="input input-bordered input-success" />
                            </div>
                            <div class="form-control w-96">
                                <input
                                    type="text"
                                    name='education'
                                    placeholder="Education"
                                    required
                                    class="input input-bordered input-success"
                                />
                            </div>
                            <div class="form-control w-96">
                                <textarea
                                    type='text'
                                    name='adderss'
                                    required
                                    className="textarea textarea-success"
                                    placeholder="Your Address">
                                </textarea>
                            </div>
                            <div class="form-control w-96">
                                <input
                                    type="text"
                                    name='img'
                                    placeholder="Social Profile Url"
                                    required
                                    class="input input-bordered input-success"
                                />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">SUBMIT</button>
                            </div>
                            <div class="form-control mt-2">
                                <Link to={`/dashboard/myprofile`}><button class="btn btn-primary">Go Profile Page</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProfile;