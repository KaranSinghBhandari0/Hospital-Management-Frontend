import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

export default function Navbar() {
  const {adminLogout, doctorLogout, isAdmin, isDoctor} = useContext(AppContext);

  const handleLogout = (e) => {
    e.preventDefault();
    if(isAdmin) {
      adminLogout();
    } else {
      doctorLogout();
    }
  }
  
  return (
    <div className="w-full bg-white border-b">
      <nav className='flex justify-between p-4 max-w-[1920px] mx-auto'>
        <img className="h-10 w-28 cursor-pointer" src={assets.logo} alt="logo" />
        {(isAdmin || isDoctor) && 
          <button className="bg-blue-600 text-white text-sm px-10 py-2 rounded-full" onClick={handleLogout}>Logout</button>
        }
      </nav>
    </div>
  )
}
