import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/header';
import AddSelectPaper from './components/addSelectPaper';
import EmptyData from './components/selectPaper';
import ArrowRight from '../../../assets/icon/Arrow Right.svg';
import { useStore } from '../../../store/context-store';

const Index = () => {
  const navigate = useNavigate();
  const [Store, StoreDispatch] = useStore();
  const [tab, setTab] = useState(false);

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
    ) {
      return;
    }
    StoreDispatch({ type: 'EXAM_PAPER_DATA', payload: selectedData });
    navigate('/basicInfo');
  };

  return (
    <div>
      <Header selectedData={selectedData} setSelectedData={setSelectedData} />
      {!selectedData.course_id ||
      !selectedData.subject_id ||
      !selectedData.chapter_id ? (
        <EmptyData />
      ) : (
        <AddSelectPaper />
      )}
      <div className='flex justify-end mt-6'>
        <button
          onClick={handleNextClick}
          className='h-11 bg-white w-24 rounded-lg shadow-md flex items-center justify-center'
        >
          <div className='flex items-center'>
            <p>Next</p>
            <img src={ArrowRight} className='ml-2' alt='Arrow Right' />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Index;
