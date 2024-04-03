import React from 'react';
import todolist from '../todolist.json'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TodoDetail = () => {
    const {todoId} = useParams()
    console.log(todoId);
    const todo = todolist.find(todo=>todo.id == todoId)

    const nav = useNavigate()

    return (
        <div>
            TodoDetail
            <p>User Id: {todo.userId}</p>
            <p>Todo status: {todo.completed ? 'Completed': 'Uncompleted'}</p>
            <button onClick={()=>nav('/todolist')}>Back To Todolist</button>
            <button onClick={()=>nav(-1)}>Back</button>
        </div>
    );
};

export default TodoDetail;

// undefined, null, nan,...