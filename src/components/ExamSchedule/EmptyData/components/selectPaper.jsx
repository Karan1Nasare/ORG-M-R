import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import objectIcon from '../../../../assets/icon/objectIcon.svg';
import ArrowRight from '../../../../assets/icon/Arrow Right.svg';
import AddSelectPaper from '../../SelectPaper/components/addSelectPaper';

const SelectPaper = () => {
  const navigate = useNavigate();
  const [nextClick, setNextClick] = useState(false);

  const handleNextClick = () => {
    console.log('hello');
    navigate('/basicInfo');
  };

  return (
    <div className='w-full max-w-screen mx-auto'>
      {/* {nextClick ? (
        <AddSelectPaper />
      ) : (
        ''
        <div className='mt-8 bg-secondary__fill w-full max-w-screen h-27.3 py-14 px-7 border border-gray-700 rounded-xl mx-auto'>
          <div className='flex justify-center items-center'>
            <img
              className='w-84 2xl:w-96 mb-3 center'
              src={objectIcon}
              alt=''
            />
          </div>
          <h2 className='text-white mt-6 justify-center'>
            Please Select Standard and Subject
          </h2>
        </div>
      )} */}

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

export default SelectPaper;
