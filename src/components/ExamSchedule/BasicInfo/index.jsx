import React, { useState } from 'react';
import { FaUser, FaImage } from 'react-icons/fa';
import ExamForm from './ExamForm';
import BackgroundSelect from './BackgroundSelect';

function Index() {
  const [activeTab, setActiveTab] = useState('basicInfo');

  return (
    <div className='min-h-screen flex flex-col items-start justify-start p-8'>
      <div className='flex w-full max-w-screen mx-auto space-x-8 mb-6'>
        <button
          className={`flex items-center space-x-2 px-4 py-2 ${
            activeTab === 'basicInfo'
              ? 'text-white border-b-2 border-orange-500'
              : 'text-gray-500'
          } focus:outline-none`}
          onClick={() => setActiveTab('basicInfo')}
        >
          <FaUser />
          <span>Basic Info</span>
        </button>
        <button
          className={`flex items-center space-x-2 px-4 py-2 ${
            activeTab === 'selectBackground'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-500'
          } focus:outline-none`}
          onClick={() => setActiveTab('selectBackground')}
        >
          <FaImage />
          <span>Select Background</span>
        </button>
      </div>
      <div className='w-full max-w-4xl'>
        {activeTab === 'basicInfo' && <ExamForm />}
        {activeTab === 'selectBackground' && <BackgroundSelect />}
      </div>
    </div>
  );
}

export default Index;
