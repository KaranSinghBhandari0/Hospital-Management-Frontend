import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import AllDoctors from './pages/AllDoctors';
import AddDoctors from './pages/AddDoctor';
import Doctor from './pages/Doctor';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DoctorDashboard from './pages/DoctorDashboard';

export default function App() {
  const { isAdmin, isDoctor } = useContext(AppContext);
  
  return (
    <>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <Routes>
          {/* Redirect to Dashboard if already logged in */}
          <Route path="/" element={(!isAdmin || !isDoctor) ? <Login /> : <Navigate to="/dashboard" />} />
          
          {/* Protected routes for admin */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/appointments" element={<ProtectedRoute element={<Appointments />} />} />
          <Route path="/addDoctor" element={<ProtectedRoute element={<AddDoctors />} />} />
          <Route path="/allDoctors" element={<ProtectedRoute element={<AllDoctors />} />} />
          <Route path="/doctor/:id" element={<ProtectedRoute element={<Doctor />} />} />

          <Route path="*" element={<Navigate to="/" />} />
          
          <Route path="/doctorDashboard" element={ isDoctor ? <DoctorDashboard/> : <Login type={'doctor'} />  } />
        </Routes>
      </div>
    </>
  );
}
