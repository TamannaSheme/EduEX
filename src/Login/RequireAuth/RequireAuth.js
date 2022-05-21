import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();

  if(loading){
      return
     <Loading></Loading>
  }
   
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

   
    return children;
   
};

export default RequireAuth;