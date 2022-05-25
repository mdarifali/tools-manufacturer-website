import { useEffect, useState } from "react"


const useToken = user => {
    const [token, setToken] = useState('');

    useEffect( () => {
        const email = user?.user?.email;
        const currentUsers  = {email: email};
        if (email) {
            fetch( `http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUsers)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data insert', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);

            })
        }

    }, [user]);

    return [token];
}
export default useToken ;