import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseAuth';
import Loading from '../../Pages/Shared/Loading';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, errors] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.pathname || '/';

    if (errors) {
        toast.error(errors.message, {
            position: toast.POSITION.TOP_CENTER
        })
    }

    if (loading) {
        return <Loading />;
    }

    if (user) {
        navigate(form);
    }

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-primary text-white my-3 w-full max-w-xs">
                CONTINUE WITH GOOGLE
            </button>
            {/* <button
                className="btn btn-outline btn-primary text-white my-3 w-full max-w-xs">
                CONTINUE WITH FACEBOOK
            </button> */}
        </div>
    );
};

export default SocialLogin;