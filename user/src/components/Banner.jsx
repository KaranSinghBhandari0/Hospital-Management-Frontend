import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row bg-blue-700 rounded-lg px-6 sm:px-10 my-20 md:mx-10 overflow-hidden">
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button
          className="bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          onClick={() => { navigate('/doctors/all'); scrollTo(0, 0); }}
        >
          Book Now
        </button>
      </div>
      <div className="flex justify-center md:justify-end md:w-1/2 relative mt-6 md:mt-0">
        <img className="w-full max-w-md object-cover" src={assets.appointment_img} alt="Appointment" />
      </div>
    </div>
  );
}
