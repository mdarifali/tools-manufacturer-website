import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../FirebaseAuth';


const MyProfile = () => {
    const [profiles, setProfiles] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;

        if (user) {
            const url = `https://radiant-plains-16562.herokuapp.com/profile?email=${email}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    "authorization": `${email} ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setProfiles(data))
        }

    }, [user]);

    return (
        <div>
            <h1 className="text-4xl uppercase my-10">My Profile</h1>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="max-w-md">
                        {
                            profiles.map(profile =>

                                <div key={profile._id} className="card bg-base-100 shadow-xl" style={{ width: "450px" }}>
                                    <div className="avatar m-auto p-6">
                                        <div className="w-56 rounded-full">
                                            <img src={profile.img} alt='#' />
                                        </div>
                                    </div>
                                    <div className="card-body text-left text-white gap-9 bg-orange-300">
                                        <h2 className="text-3xl text-center font-semibold">{profile.name}</h2>
                                        <p>Email: {profile.email}</p>
                                        <span>Phone: {profile.phone}</span>
                                        <span>Education: {profile.education}</span>
                                        <span>Adderss: {profile.adderss}</span>
                                    </div>
                                </div>
                            )
                        }
                        <Link to={`/dashboard/add-profile`}>
                            <button className="btn btn-ghost mt-5">Update Your Profile</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;