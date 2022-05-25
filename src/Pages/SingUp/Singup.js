import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../FirebaseAuth';
import useToken from '../../useToken/useToken';
import Loading from '../Shared/Loading';

const Singup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, guser, gloading, gerrors] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || guser);

    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.pathname || '/';

    if (error || gerrors || updateError) {
        toast.error(error.message, {
            position: toast.POSITION.TOP_LEFT
        })
    }

    if (loading || gloading || updating) {
        return <Loading />;
    }

    if (token) {
        navigate(form);
        toast.success(`Congratulations! Welcome our new member`, {
            position: toast.POSITION.TOP_LEFT
        });
    }


    const handleSingup = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    }


    return (
        <div className="hero min-h-screen mt-5">
            <div className="hero-content text-center shadow-2xl rounded-2xl border border-primary">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold">Register Form</h1>
                    <form onSubmit={handleSubmit(handleSingup)} className='mt-7'>
                        <div className='flex flex-col'>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered input-success"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className='my-3'>
                                {errors.name?.type === 'required' && <span className="label-text-altfont-bold text-red-500">{errors.name.message}</span>}
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered input-success"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                            <label className='my-3'>
                                {errors.email?.type === 'required' && <span className="label-text-altfont-bold text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt font-bold text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className='flex flex-col'>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered input-success w-96"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                        message: 'Min 8 characters, at least 1 letter, 1 number and 1 special character!'
                                    }
                                })}
                            />

                            <label className='my-3'>
                                {errors.password?.type === 'required' && <span className="label-text-alt font-bold text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt font-bold text-red-500">{errors.password.message}</span>}
                            </label>

                            <button type='submit' className="btn btn-secondary text-white my-5 ">Register Now</button>
                            <div className='text-sm text-center'>
                                <Link to='/login'>
                                    <p>Already have an account? <span className='text-primary font-bold'>Login Now</span></p>
                                </Link>
                            </div>
                            <div className='px-12'>
                                <div className="divider">OR</div>
                            </div>
                            <div>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn btn-outline btn-primary text-white my-3 w-full max-w-xs">
                                    CONTINUE WITH GOOGLE
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Singup;