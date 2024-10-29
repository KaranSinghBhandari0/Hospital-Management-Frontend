import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import doctors from '../assets/doctors.svg';
import Dashboard from '../assets/Dashboard.svg';
import Appointments from '../assets/Appointments.svg';
import addDoctors from '../assets/Add new.svg';
import { AppContext } from '../context/AppContext';

export default function Sidebar() {
  const {isAdmin} = useContext(AppContext)
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 1, name: 'Dashboard', icon: Dashboard, path: '/dashboard' },
    { id: 2, name: 'Appointments', icon: Appointments, path: '/appointments' },
    { id: 3, name: 'Add Doctor', icon: addDoctors, path: '/addDoctor' },
    { id: 4, name: 'Doctors List', icon: doctors, path: '/allDoctors' },
  ];
  
  return (
    <>  
      {isAdmin && 
        <div className="min-h-screen bg-white border-r">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                location.pathname === item.path ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => navigate(item.path)}
            >
              <img src={item.icon} className="min-w-5" alt={item.name} />
              <p className='hidden md:block'>{item.name}</p>
            </div>
          ))}
        </div>
      }
    </>
  );
}
