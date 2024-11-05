import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const { login, signup, isAuthenticated } = useContext(AppContext);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(()=> {
    if(isAuthenticated) {
      toast.error('already logged in');
      navigate('/')
    }
  },[isAuthenticated])
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormToggle = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(formData);
    } else {
      signup(formData);
    }
  };

  return (
    <LoginForm isLogin={isLogin} handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} handleFormToggle={handleFormToggle} />
  );
}
