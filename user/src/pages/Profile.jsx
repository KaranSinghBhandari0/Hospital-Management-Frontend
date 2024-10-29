import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ProfileView from '../components/ProfileView';
import ProfileEditForm from '../components/ProfileEditForm';

export default function ProfileContainer() {
  const {getUserDetails, updateUserDetails } = useContext(AppContext);
  const [userDetails, setUserDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(()=> {
    const fetchUserDetails = async () => {
      return await getUserDetails();
    }
    fetchUserDetails().then(res => setUserDetails(res));
    fetchUserDetails().then(res => setFormData(res));
  },[])

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateUserProfile = (e) => {
    e.preventDefault();

    const updateDetails = async () => {
      return await updateUserDetails(formData);
    }

    updateDetails().then(res => setUserDetails(res), setIsEditing(false));
  };

  return (
    <>
      {userDetails && 
        <div className='w-full max-w-4xl mx-auto p-6'>
          <p className='text-4xl font-semibold text-center mb-8'>My Profile</p>
    
          {!isEditing ? (
            <ProfileView userDetails={userDetails} onEditClick={handleEditClick} />
          ) : (
            <ProfileEditForm
              formData={formData} handleInputChange={handleInputChange} updateUserProfile={updateUserProfile} onCancelEdit={() => setIsEditing(false)}
            />
          )}
        </div>
      }
    </>
  );
}
