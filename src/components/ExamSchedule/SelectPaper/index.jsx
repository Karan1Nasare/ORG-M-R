import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/header';
import AddSelectPaper from './components/addSelectPaper';
import ArrowRight from '../../../assets/icon/Arrow Right.svg';

const Index = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    console.log('hello');
    navigate('/basicInfo');
  };
  return (
    <div>
      <Header />
      <AddSelectPaper />
      <div className='flex justify-end mt-6'>
        <button
          onClick={handleNextClick}
          className='h-11 bg-white w-24 rounded-lg'
        >
          <div className='flex px-4 justify-end'>
            <p>Next</p>
            <img
              src={ArrowRight}
              style={{ marginLeft: '1rem' }}
              alt='Arrow Right'
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Index;
