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
        const url = `https://radiant-plains-16562.herokuapp.com/profile?email=${email}`;
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
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Create Your Profile</h1>
                        <Link to={`/dashboard/add-profile`}>
                            <button className="btn btn-primary mt-5">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;