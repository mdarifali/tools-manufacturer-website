import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;


    const makeAdmin = () => {
        const email = user.email;
        
        const url = `https://radiant-plains-16562.herokuapp.com/user/admin/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "authorization": `${email} ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
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
                <td>{role !== 'admin' ?
                    <button onClick={makeAdmin} className="btn btn-outline btn-xs">Make Admin</button>
                    :<span className="badge badge-primary">Admin</span>
                    }
                </td>
                <td><button className="btn btn-outline btn-primary btn-xs">Delete user</button></td>
            </tr>

        </>
    );
};

export default UserRow;