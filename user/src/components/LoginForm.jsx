import React, { useState } from 'react';
import eyeIcon from '../assets/hidden.png';

export default function LoginForm({ formData, handleFormToggle, handleChange, isLogin, handleSubmit }) {
  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  return (
    <form className="flex flex-col gap-6 p-6 pb-4 w-[85%] max-w-[350px] rounded-xl border bg-white shadow-lg mx-auto mt-16" onSubmit={handleSubmit}>
        <p className="text-3xl font-bold text-center text-blue-600">
          {isLogin ? 'Login' : 'Signup'}
        </p>
        <p className="text-sm">
          {isLogin ? 'Log in to your account' : 'Create an account for free'}
        </p>

        {!isLogin && (
          <div className="relative">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`text-sm text-slate-700 border border-[2.3px] w-[100%] rounded p-2 outline-amber-500 transition-all focus:border-amber-500 ${
                formData.username && 'has-value'
              }`}
              required
            />
            <label className={`floating-label ${formData.username && 'active'}`}>
              Username
            </label>
            <i className="fa-solid fa-user absolute right-4 top-3"></i>
          </div>
        )}

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`text-sm text-slate-700 border border-[2.3px] w-[100%] rounded p-2 outline-amber-500 transition-all focus:border-amber-500 ${
              formData.email && 'has-value'
            }`}
            required
          />
          <label className={`floating-label ${formData.email && 'active'}`}>
            Email
          </label>
          <i className="fa-solid fa-envelope absolute right-4 top-3"></i>
        </div>

        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`text-sm text-slate-700 border border-[2.3px] w-[100%] rounded p-2 outline-amber-500 transition-all focus:border-amber-500 ${
              formData.password && 'has-value'
            }`}
            required
          />
          <label className={`floating-label ${formData.password && 'active'}`}>
            Password
          </label>
          <img
            onClick={togglePassword}
            src={eyeIcon}
            className="h-5 w-5 absolute top-3 right-4 cursor-pointer"
            alt="toggle password visibility"
          />
        </div>

        <button className="w-[50%] bg-green-500 rounded-xl py-2 text-white text-xl font-semibold mx-auto hover:bg-green-600">
          {isLogin ? 'Login' : 'Signup'}
        </button>
        <hr />
        <p className="text-sm text-center">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <span onClick={handleFormToggle} className="text-blue-600 cursor-pointer">
                Signup
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span onClick={handleFormToggle} className="text-blue-600 cursor-pointer">
                Login
              </span>
            </>
          )}
        </p>
    </form>
  );
}
