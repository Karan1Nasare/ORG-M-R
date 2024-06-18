import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/examPreview');
  };
  const exam = [
    {
      name: 'Bharat No Varsho',
      question: '40 Questions',
      mark: '80 Marks',
      subject: 'Social Science',
      time: '1 Hour',
      standard: '10th',
      examiner: '300',
      date: 'April 14, 2023',
      duration: '9:00 PM To 12:00PM ',
    },
    {
      name: 'Bharat No Varsho',
      question: '40 Questions',
      mark: '80 Marks',
      subject: 'Social Science',
      time: '1 Hour',
      standard: '10th',
      examiner: '300',
      date: 'April 14, 2023',
      duration: '9:00 PM To 12:00PM ',
    },
    {
      name: 'Bharat No Varsho',
      question: '40 Questions',
      mark: '80 Marks',
      subject: 'Social Science',
      time: '1 Hour',
      standard: '10th',
      examiner: '300',
      date: 'April 14, 2023',
      duration: '9:00 PM To 12:00PM ',
    },
  ];
  return (
    <div className='grid gap-8 mt-8 grid-cols-3'>
      {exam.map((examData, index) => {
        return (
          <div
            key={index}
            className='relative p-7 bg-secondary__fill rounded-md border border-gray-700 flex-col justify-start items-end gap-3 inline-flex'
          >
            <div
              onClick={handleOnClick}
              className='absolute top-3 right-3 flex justify-end w-full pr-4'
            >
              <Icon icon={'mdi:eye'} className='text-white' width={25} />
            </div>
            <div className='self-stretch justify-start items-start gap-3 inline-flex'>
              <div className='flex-col justify-start items-start gap-1.5 inline-flex'>
                <h1 className="w-[314px] text-left text-white text-[15px] font-normal font-['Helvetica']">
                  {examData.name}
                </h1>
                <h2 className="w-[314px] text-left text-white text-xs font-normal font-['Helvetica']">
                  {examData.question}
                </h2>
                <div className="w-[314px] text-left text-white text-xs font-normal font-['Helvetica']">
                  {examData.mark}
                </div>
              </div>
            </div>
            <div className='self-stretch justify-between items-center inline-flex'>
              <div className="grow shrink basis-0 text-left text-gray-400 text-xs font-normal font-['Manrope'] leading-none">
                <h2>
                  Subject :<br />
                  {examData.subject}
                </h2>
              </div>
              <div className="text-right text-gray-400 text-xs font-normal font-['Manrope'] leading-none">
                Total Time :<br />
                {examData.time}
              </div>
            </div>
            <div className='self-stretch py-px justify-between items-center inline-flex'>
              <div className='px-3 py-[3px] bg-green__opacity rounded-[999px] justify-start items-start gap-2.5 flex'>
                <div className="text-green text-xs font-semibold font-['Manrope']">
                  Std - {examData.standard}
                </div>
              </div>
              <div className="text-right text-gray-400 text-xs font-normal font-['Manrope'] leading-none">
                No of Examiner :<br />
                {examData.examiner}
              </div>
            </div>
            <div className='self-stretch justify-between items-center inline-flex'>
              <div className="text-right text-gray-400 text-xs font-normal font-['Manrope'] leading-none">
                {examData.date}
              </div>
              <div className="text-right text-gray-400 text-xs font-normal font-['Manrope'] leading-none">
                {examData.duration}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
