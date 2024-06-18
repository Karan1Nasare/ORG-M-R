// Components/Header.js

import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleAddStaffClick = () => {
    navigate('/addStaff');
  };

  return (
    <div
      style={{
        width: '100%', // Ensure the header takes the full width of the container
        height: '104px',
        borderRadius: '12px',
        border: '0.6px solid #343B4F',
        opacity: '1',
        backgroundColor: '#0B1739',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        margin: '0 auto', // Center the header
        padding: '20px 30px', // Adjust padding as needed
        boxSizing: 'border-box', // Ensure padding does not affect the width
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <input
          type='text'
          placeholder='Search Name, Enrollment, Standard'
          style={{
            width: '332px', // Fixed width for the search bar
            backgroundColor: '#081028',
            color: '#fff',
            borderRadius: '5px',
            padding: '10px',
            marginRight: '20px',
          }}
        />
        <select
          style={{
            backgroundColor: '#081028',
            color: '#fff',
            border: '1px solid #343B4F',
            borderRadius: '5px',
            padding: '10px',
            marginRight: '20px',
          }}
        >
          <option>Select STD</option>
          {/* Add more options here */}
        </select>
        <select
          style={{
            backgroundColor: '#081028',
            color: '#fff',
            border: '1px solid #343B4F',
            borderRadius: '5px',
            padding: '10px',
            marginRight: '20px',
          }}
        >
          <option>Select City</option>
          {/* Add more options here */}
        </select>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#fff',
            border: '1px solid #343B4F',
            borderRadius: '5px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ marginRight: '5px' }}>✕</span> Clear All
        </button>
      </div>
      <button
        onClick={handleAddStaffClick}
        style={{
          backgroundColor: '#fff',
          color: '#0B1739',
          border: '1px solid #343B4F',
          borderRadius: '5px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaUserPlus style={{ marginRight: '5px' }} /> Add Staff
      </button>
    </div>
  );
};

export default Header;
