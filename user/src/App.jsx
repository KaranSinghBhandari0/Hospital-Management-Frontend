import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import Doctor from './pages/Doctor';
import Profile from './pages/Profile';
import Appointments from './pages/Appointments';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/doctors/:id" element={<Doctors/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/doctor/:id" element={<Doctor/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/appointments" element={<Appointments/>} />
          </Routes>
        </main>
      <Footer/>
    </>
  );
}
