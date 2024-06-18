import React from 'react';
import MyCalendar from './Calendar/MyCalendar';

const Index = () => {
  return (
    <div>
      <h1 className='text-left text-white text-3xl mb-6'>Event Management</h1>
      <div className='bg-secondary__fill p-4 rounded-xl border border-gray-700 w-auto h-auto'>
        <MyCalendar />
      </div>
    </div>
  );
};

export default Index;
