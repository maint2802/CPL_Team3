import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
const Login = ({ setIsLogin }) => {
  const nav = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          setIsLogin(true);
          nav("/home");
        }}
      >
        Login Successful
      </button>
    </div>
  );
};

export default Login;
// formik
// yup
// npm i formik yup
