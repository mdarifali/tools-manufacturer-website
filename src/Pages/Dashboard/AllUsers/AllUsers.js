import React, { useEffect, useState } from 'react';



const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })

    }, [])


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
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td><button class="btn btn-outline btn-primary btn-xs">Make Admin</button></td>
                                    <td><button class="btn btn-xs">X</button></td>
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