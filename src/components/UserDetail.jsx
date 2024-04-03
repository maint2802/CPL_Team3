import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetail } from '../callAPI/users';
const UserDetail = () => {
    const {userId} = useParams()
    const [user, setUser] = useState({})
    useEffect(()=>{
        getUserDetail(userId).then(res=>{
        setUser(res.data)
        })
    }, [])

    return (
        <div>
            <p>Id: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
};

export default UserDetail;


