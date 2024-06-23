import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/header';
import AddSelectPaper from './components/addSelectPaper';
import ArrowRight from '../../../assets/icon/Arrow Right.svg';
import { useStore } from '../../../store/context-store';

const Index = () => {
  const navigate = useNavigate();
  const [Store, StoreDispatch] = useStore();

  const [selectedData, setSelectedData] = useState({
    course_id: null,
    subject_id: null,
    chapter_id: null,
  });

  const handleNextClick = () => {
    if (
      !selectedData.course_id ||
      !selectedData.subject_id ||
      !selectedData.chapter_id
    )
      return;
    StoreDispatch({ type: 'EXAM_PAPER_DATA', payload: selectedData });
    navigate('/basicInfo');
  };
  return (
    <div>
      <Header selectedData={selectedData} setSelectedData={setSelectedData} />
      {/* <AddSelectPaper /> */}
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
