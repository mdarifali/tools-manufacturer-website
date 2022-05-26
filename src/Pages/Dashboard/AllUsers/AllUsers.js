import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../FirebaseAuth';



const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;

        if (user) {

            fetch('http://localhost:5000/user', {
                method: 'GET',
                headers: {
                    "authorization": `${email} ${localStorage.getItem('accessToken')}`
                }
            })

            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
        }

    }, [user])


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
                            users.map(user =>
                                <tr key={user._id}>
                                    <td>1</td>
                                    <td>{user.email}</td>
                                    <td><button class="btn btn-outline btn-xs">Make Admin</button></td>
                                    <td><button class="btn btn-outline btn-primary btn-xs">delete user</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;