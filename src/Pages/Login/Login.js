import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../FirebaseAuth';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.pathname || '/';

    if (error) {
        toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
        })
    }

    if (loading) {
        return <Loading />;
    }

    if (user) {
        navigate(form);
        toast.success(`Welcome! Login Successful`, {
            position: toast.POSITION.TOP_LEFT
        });
    }

    const handleLogin = event => {
        signInWithEmailAndPassword(event.email, event.password);
    }


    return (
        <section>
            <div className="hero min-h-screen">
                <div className="hero-content text-center shadow-2xl rounded-2xl">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <form onSubmit={handleSubmit(handleLogin)} className='mt-8 '>
                            <div className='flex flex-col'>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="input input-bordered input-accent"
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

                                <label className='my-5'>
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className='flex flex-col'>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered input-accent w-96"
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

                                <label className='my-5'>
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>

                                <div className='text-sm text-left'>
                                    <Link to='/resetpass'><p>Forgot Password?</p></Link>
                                </div>
                                <button type='submit' className="btn btn-accent text-white my-5 ">Login</button>
                                <div className='text-sm text-center'>
                                    <Link to='/singup'>
                                        <p>New to Doctors Portal? <span className='text-primary font-bold'>Create new account</span></p>
                                    </Link>
                                </div>
                                <div className="divider">OR</div>
                                <SocialLogin />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;