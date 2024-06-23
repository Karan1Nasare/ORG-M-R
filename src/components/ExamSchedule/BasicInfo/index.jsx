import React, { useEffect, useState } from 'react';
import { FaUser, FaImage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ExamForm from './ExamForm';
import BackgroundSelect from './BackgroundSelect';
import ArrowRight from '../../../assets/icon/Arrow Right.svg';
import { useStore } from '../../../store/context-store';
import { createExam } from '../../../services/exam';

function Index() {
  const [Store, StoreDispatch] = useStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basicInfo');
  const [basicInfo, setBasicInfo] = useState({
    exam_title: '',
    duration: '',
    description: '',
    number_of_questions: '',
    total_marks: '',
    exam_date: '',
    start_time: '',
    end_time: '',
    background_id: 1,
  });
  const handleNextClick = async () => {
    const isValid = Object.keys(basicInfo).every(key => basicInfo[key]);
    if (!isValid) return;

    const payload = JSON.parse(JSON.stringify(basicInfo));
    payload.exam_date = new Date(basicInfo.exam_date).getTime() / 1000;
    payload.start_time = (
      new Date(`${basicInfo.exam_date} ${basicInfo.start_time}:00`).getTime() /
      1000
    ).toString();
    payload.end_time = (
      new Date(`${basicInfo.exam_date} ${basicInfo.end_time}:00`).getTime() /
      1000
    ).toString();

    payload.chapter_id = [basicInfo.chapter_id];

    const result = await createExam(payload);
    navigate('/examSchedule');
  };

  useEffect(() => {
    if (!Store.courseData) {
      navigate('/selectPaper');
    }

    if (
      !Store.courseData ||
      !Store.courseData.course_id ||
      !Store.courseData.subject_id ||
      !Store.courseData.chapter_id
    ) {
      navigate('/selectPaper');
    } else {
      setBasicInfo({
        ...basicInfo,
        course_id: Store.courseData.course_id,
        subject_id: Store.courseData.subject_id,
        chapter_id: Store.courseData.chapter_id,
      });
    }
  }, []);

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
        {activeTab === 'basicInfo' && (
          <ExamForm examDetail={basicInfo} setExamDetails={setBasicInfo} />
        )}
        {activeTab === 'selectBackground' && <BackgroundSelect />}
      </div>
      <div className='flex justify-end mt-6'>
        <button
          onClick={handleNextClick}
          className='h-11 bg-white w-32 rounded-lg'
        >
          <div className='flex px-4 justify-end'>
            <p>Create</p>
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
}

export default Index;
