import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useEffect } from 'react';
import {toast} from 'react-toastify'

export default function Login({type}) {
  const [doctorLogin, setDoctorLogin] = useState(false);
  const { adminLogin , DoctorLogin } = useContext(AppContext);

  useEffect(()=> {
    if(type) {
      toast.error('Login with doctor credentials')
      setDoctorLogin(true);
    }
  },[])

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!doctorLogin) {
      adminLogin(formData)
    } else {
      DoctorLogin(formData)
    }
  };

  const toggleLoginType = () => {
    setDoctorLogin((prevState) => !prevState);
  };

  return (
    <form
      className="bg-white flex h-full flex-col gap-3 items-start p-8 w-[80%] max-w-[340px] border rounded-xl text-[#5E5E5E] text-sm shadow-lg mt-20 mx-auto"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl w-full font-bold text-center">
        <span className="text-blue-700">{doctorLogin ? 'Doctor' : 'Admin'}</span> Login
      </p>
      <p>{doctorLogin ? 'Login with doctor credentials' : 'Login with admin credentials'}</p>

      <div className="w-full">
        <p>Email</p>
        <input
          className="border border-[#DADADA] rounded w-full p-2 mt-1"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="w-full">
        <p>Password</p>
        <input
          className="border border-[#DADADA] rounded w-full p-2 mt-1"
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="bg-blue-700 text-white w-full py-2 my-2 rounded-md text-base"> Login </button>

      <p className="text-sm text-blue-600 cursor-pointer" onClick={toggleLoginType}>
        {doctorLogin ? 'Admin Login?' : 'Doctor Login?'}
      </p>
    </form>
  );
}
