import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../FirebaseAuth';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';


const MakeAdmin = () => {

    const [user] = useAuthState(auth);
    const {email} = user;
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://radiant-plains-16562.herokuapp.com/user', {
        method: 'GET',
        headers: {
            "authorization": `${email} ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    
    if (isLoading) {
        return <Loading />
    }


    return (
        <div className='p-10'>
            <h1 className='text-center text-4xl uppercase py-5'>All User List</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
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
                                refetch = {refetch}
                            />
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;