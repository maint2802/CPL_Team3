import React from 'react';
import Child from './Child';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';
import axios from 'axios';
const Parent = () => {

    const token =  localStorage.getItem('token')

    const newArticle = {
        "article": {
          "title": "string",
          "description": "string",
          "body": "string",
          "tagList": [
            "string"
          ]
        }
      }

      const handleSubmit = ()=>{
        axios.post('https://api.realworld.io/api/articles',newArticle, {headers: {
            Authorization: 'Bearer ' + token
        }}  )
      }

    const dispatch = useDispatch()
    
    const counter = useSelector((state)=>state.counter)
    console.log(counter);  //{value: 0}

    const handleDecreCounter =()=>{
        dispatch(decrement())
    }

    const handleIncreCounter =()=>{
        dispatch(increment())
    }

    const handleIncreAmount = ()=>{
        dispatch(incrementByAmount(20))
    }

    return (
        <div>
            Parent
            <button onClick={handleDecreCounter}>-</button>
            {counter.value}
            <button onClick={handleIncreCounter}>+</button>
            <button onClick={handleIncreAmount}>Add 20</button>
            <Child/>
        </div>
    );
};

export default Parent;