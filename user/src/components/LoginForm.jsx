import React from 'react'

export default function LoginForm({isLogin, handleSubmit, formData, handleChange, handleFormToggle}) {
  return (
    <form 
      className="flex flex-col gap-3 items-start p-8 w-[100vw] max-w-[340px] border rounded-xl text-[#5E5E5E] text-sm shadow-lg mt-16 mx-auto"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl font-semibold text-blue-600">{isLogin ? 'Login' : 'Signup'}</p>
      <p>{isLogin ? 'Please log in to book an appointment' : 'Create a new account'}</p>
      {!isLogin && (
        <div className="w-full">
          <p>Full Name</p>
          <input 
            name="username"
            className="border border-[#DADADA] rounded w-full p-2 mt-1" 
            type="text" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="w-full">
        <p>Email</p>
        <input 
          name="email"
          className="border border-[#DADADA] rounded w-full p-2 mt-1" 
          type="email" 
          required 
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="w-full">
        <p>Password</p>
        <input 
          name="password"
          className="border border-[#DADADA] rounded w-full p-2 mt-1" 
          type="password" 
          required 
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button 
        type="submit"
        className="bg-blue-700 text-white w-full py-2 my-2 rounded-md text-base"
      >
        {isLogin ? 'Login' : 'Signup'}
      </button>
      <p>
        {isLogin ? 'Create a new account' : 'Already have an account?'}{' '}
        <span className="text-blue-700 underline cursor-pointer" onClick={handleFormToggle}>
          Click here
        </span>
      </p>
    </form>
  )
}
