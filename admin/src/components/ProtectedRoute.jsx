import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ProtectedRoute = ({ element }) => {
  const { isAdmin } = useContext(AppContext);

  if(!isAdmin) {
    toast.error('access denied');
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
