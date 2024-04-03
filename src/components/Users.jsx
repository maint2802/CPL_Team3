import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { getUsers } from '../callAPI/users';
const Users = () => {
    const nav = useNavigate()
    const handleToUserDetail = (userId)=>{
        nav(userId + '')
    }
    const [counter, setCounter]= useState(0)
    const [users, setUsers] = useState([])
    useEffect(()=>{
        getUsers().then(users=>{
            setUsers(users)
        })
    }, [])

  
    // fetch vs async await call api get users

    return (
        <div>
            <button onClick={()=>setCounter(counter+1)}>Incre Counter</button>
            <span>{counter}</span>
            {users.map((user, index)=>{
                console.log('render');
                return (
                <div key={user.id} style={{border: '3px #ccc solid'}}>
                    <b>{index+1}</b>
                    <button 
                        className='btn btn-success'
                        onClick={()=>handleToUserDetail(user.id)}
                    >Detail</button>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
            </div>)
            })}
        </div>
    );
};

export default Users;