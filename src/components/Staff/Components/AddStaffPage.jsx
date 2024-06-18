// Components/AddStaffPage.jsx

import React from 'react';
import ProfileForm from './Forms/profileForm';

const AddStaffPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#081028',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '1200px',
          backgroundColor: '#0B1739',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <ProfileForm />
      </div>
    </div>
  );
};

export default AddStaffPage;
