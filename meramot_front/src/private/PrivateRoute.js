import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: Component}) => {
    const user = useSelector((state)=>state.user.user);
    // console.log("At protected checker ",user);
    return user? <Outlet />:<Navigate to='/auth' />;
}
export default PrivateRoute;