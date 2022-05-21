import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ScocialLogin from '../Login/ScocialLogin/ScocialLogin';


const Register = () => {


  //   create user using email and password 
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let loadingElement;
  if (loading) {
    loadingElement =
      <Spinner animation="border" variant="danger" />
  }


  const navigate = useNavigate();

  const handleRegisterSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);

  }

  // <=================================navigate after register=====================>
  if (user) {
    navigate('/home');
  }


  // <============================  handle error==========================> 
  let errorElement;
  if (error) {
    errorElement =
      <div>
        <p> Error: {error.message} </p>
      </div>
  }


  return (
    <div>
      <div className="container login">

        <h2 className='text-center mt-5 text-dark'> Register </h2>
        <hr className="new-login" />
        <div className="login-contanier">
          <form onSubmit={handleRegisterSubmit}>
            <input className='input-field' type="name" name="name" id="1" placeholder='Enter Your name' />
            <input className='input-field' type="email" name="email" id="2" placeholder='Enter Your Email' />
            <input className='input-field' type="password" name="password" id="3" placeholder='Enter Password' />
            <input className='login-btn' type="submit" value="register" />

          </form>
          <p className='text-center'> {loadingElement} </p>
          <h6>  Already have an account ? <Link to="/login"> <span> Please Login </span> </Link>   </h6>
        </div>
        {errorElement}
        {/* <ScocialLogin></ScocialLogin> */}
        <ScocialLogin></ScocialLogin>
      </div>
    </div>
  );
};

export default Register;