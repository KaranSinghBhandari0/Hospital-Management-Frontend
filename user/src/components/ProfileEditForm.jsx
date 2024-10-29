import React from 'react';

const ProfileEditForm = ({ formData, handleInputChange, updateUserProfile, onCancelEdit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <p className='text-2xl font-semibold mb-4'>Edit Profile</p>
      <form className="flex flex-col gap-4" onSubmit={updateUserProfile}>
        <input
          type="text"
          name="username"
          value={formData.username || ''}
          onChange={handleInputChange}
          placeholder="Name"
          className="p-2 border rounded"
          required
        />
        <select
          name="gender"
          value={formData.gender || ''}
          onChange={handleInputChange}
          className="p-2 border rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date"
          name="dob"
          value={formData.dob ? formData.dob.split('T')[0] : ''}
          onChange={handleInputChange}
          className="p-2 border rounded"
          required
        />
        <div className="flex justify-center mt-4">
          <button
            type='submit'
            className='bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300'
          >
            Save Changes
          </button>
          <button
            type='button'
            className='bg-gray-400 text-white px-6 py-2 rounded-full hover:bg-gray-500 transition duration-300 ml-4'
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
