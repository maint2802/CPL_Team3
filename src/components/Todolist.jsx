import React from 'react';
import todolist from '../todolist.json'
import { useNavigate, Link } from 'react-router-dom';
const Todolist = () => {
    const nav = useNavigate()
    return (
        <div >
            {todolist.map(todo=>{
                return <div className='border' key={todo.id}>
                            <p>Todo Id: {todo.id}</p>
                            <p>Tittle: {todo.title}</p>
                            {/* <button onClick={()=>{nav('/todolist/'+todo.id)}} className='btn btn-success'>Detail</button> */}
                            <Link to={todo.id+''}>Detail</Link>
                        </div>  
            })}
        </div>
    );
};

export default Todolist;

// nav('/todolist/'+todo.id)
// nav(todo.id+'')

