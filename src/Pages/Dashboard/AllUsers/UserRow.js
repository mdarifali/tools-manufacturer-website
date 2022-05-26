import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email, role } = user;


    const makeAdmin = () => {
        const email = user.email;
        
        const url = `http://localhost:5000/user/admin/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "authorization": `${email} ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Admin Make Done`, {
                    position: toast.POSITION.TOP_LEFT
                });
            })
    };

    return (
        <>
            <tr>
                <td>1</td>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-outline btn-xs">Make Admin</button>}</td>
                <td><button class="btn btn-outline btn-primary btn-xs">delete user</button></td>
            </tr>

        </>
    );
};

export default UserRow;