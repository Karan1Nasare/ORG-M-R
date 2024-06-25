import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/examSchedule/selectPaper');
  };
  return (
    <div>
      <h1 className='text-white text-3xl text-left'>Exam</h1>
      <div className='bg-secondary__fill justify-between flex h-28 border rounded-xl mt-4 border-gray-700 w-full max-w-screen mx-auto'>
        <input
          type='text'
          placeholder='Search Name, Inrollment, Standerd'
          className='w-80 ml-8 mt-8 p-2 bg-secondary__fill__dark h-10 rounded '
          value={search}
          onInput={e => setSearch(e.target.value)}
        />
        <button
          onClick={handleOnClick}
          className='bg-white  mt-8 justify-center mr-8 rounded-lg h-10 w-40'
        >
          Exam Schedule
        </button>
      </div>
    </div>
  );
};

export default Header;
