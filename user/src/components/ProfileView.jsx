import React from 'react';
import { assets } from '../assets/assets';

const ProfileView = ({ userDetails, onEditClick }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center gap-8">
        <img
          src={assets.profile_pic || '/default-profile-pic.jpg'}
          alt="Profile"
          className='w-28 h-28 rounded-full border-2 border-blue-700'
        />
        <div className="w-full flex flex-col gap-4">
          <p className="text-lg"><b>Name:</b> {userDetails.username || 'N/A'}</p>
          <p className="text-lg"><b>E-mail:</b> {userDetails.email || 'N/A'}</p>
          <p className="text-lg"><b>Gender:</b> {userDetails.gender || 'N/A'}</p>
          <p className="text-lg"><b>D.O.B:</b> {userDetails.dob || 'N/A'}</p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className='bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300'
          onClick={onEditClick}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProfileView;