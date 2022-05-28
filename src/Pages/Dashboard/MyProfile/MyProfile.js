import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../FirebaseAuth';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    console.log(profile);

    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/profile?email=${email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                
            }
        })
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user]);

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Create Your Profile</h1>
                        <Link to={`/dashboard/add-profile`}>
                            <button class="btn btn-primary mt-5">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;