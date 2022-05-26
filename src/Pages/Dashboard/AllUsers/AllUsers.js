import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../FirebaseAuth';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';


const AllUsers = () => {

    const [user] = useAuthState(auth);
    const {email} = user;
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            "authorization": `${email} ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    
    if (isLoading) {
        return <Loading />
    }

    // const [users, setUsers] = useState([]);
    // const [user] = useAuthState(auth);

    // useEffect(() => {
    //     const {email} = user;

    //     if (user) {

    //         fetch('http://localhost:5000/user', {
    //             method: 'GET',
    //             headers: {
    //                 "authorization": `${email} ${localStorage.getItem('accessToken')}`
    //             }
    //         })

    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data);
    //         })
    //     }

    // }, [user]);

    
    return (
        <div className='p-10'>
            <h1 className='text-center text-4xl uppercase py-5'>All User List</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow 
                                user = {user}
                                key = {user._id}
                            />
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;