import React, {useContext, useRef} from 'react';
import { ContextAPI } from '../App';
const Child = () => {
    const indexRef = useRef(0);

    const {todolist, setTodolist} = useContext(ContextAPI)

    const handleAddTodo = () => {
        let todo = "todo" + ++indexRef.current;
        const newTodolist = [...todolist, todo];
        setTodolist(newTodolist);
      };
    
    return (
        <div>
            Child
        <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default Child;