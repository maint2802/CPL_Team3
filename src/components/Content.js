import { useEffect, useState, useRef } from "react";
import style from "./Content.module.css";
import React from "react";
const Content = ({ inputValue }) => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  const inputRef = useRef();

  console.log("content");
  console.log(inputValue);

  return (
    <div style={{ border: "2px red solid", margin: "10px" }}>
      Content
      <div>
        <input
          ref={inputRef}
          className={`${style["input-add"]} ${style.inputClass} form-control`}
        />
        <h1 className="text-primary fs-3">Counter1</h1>
        <button
          style={{ background: "green", color: "#fff" }}
          onClick={() => {
            setCounter1(--counter1);
          }}
        >
          -
        </button>
        <span>{counter1}</span>
        <button
          onClick={() => {
            setCounter1(++counter1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <h1>Counter2</h1>
        <button
          onClick={() => {
            setCounter2(--counter2);
          }}
        >
          -
        </button>
        <span>{counter2}</span>
        <button
          onClick={() => {
            setCounter2(++counter2);
          }}
          className="btn btn-success"
        >
          +
        </button>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Content);

// useEffect, useRef

// Formik
