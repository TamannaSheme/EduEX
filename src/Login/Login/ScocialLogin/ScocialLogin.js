import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './ScocialLogin.css'

const ScocialLogin = () => {

//   signIn with google 
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
//  signin with github  
const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);  
  const navigate = useNavigate();



  if(user1 || user2){
    navigate('/home');      
  }
    let errorElement;
  if (error1 || error2) {
    errorElement =
      <div>
        <p>Error: {error1.message}</p>
      </div>
   
  }
let lodingElement
 if(loading1 || loading2){
     lodingElement =
    <Spinner animation="border" variant="danger" />
 }

    return (
        <div>
             <div className='or-container'>
                 <div className='line-befor'></div>
                 <p className='or-line'> or </p>
                 <div className='line-after'></div>
             </div>
            <div className="social-login-container"> 
            <p className='text-center'>  {lodingElement} </p>
             {errorElement}
            <button onClick={() => signInWithGoogle()} className='with-social-login'>  SignIn with Google </button>
             <button onClick={() => signInWithGithub()} className='with-social-login'>  SignIn with Github </button>
            
            </div>
        </div>
    );
};

export default ScocialLogin;