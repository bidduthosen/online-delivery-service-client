import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <div className='font-4xl'>Loading...</div>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>
};

export default PrivateRoute;