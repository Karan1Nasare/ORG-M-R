import React from 'react';

const ExamForm = () => {
  return (
    <div className='bg-[rgba(11,23,57,1)] text-white p-8 rounded-lg w-[1289px]'>
      <div className='grid grid-cols-2 gap-6'>
        <div className='col-span-2 sm:col-span-1'>
          <label
            htmlFor='exam-title'
            className='block text-sm font-medium text-gray-300'
          >
            Exam Title<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='exam-title'
            className='mt-1 block w-full h-[42px] p-[0px_12px] bg-[rgba(11,23,57,1)] border border-[0.6px] border-[#343B4F] rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Enter Exam Title'
          />
        </div>
        <div className='col-span-2 sm:col-span-1'>
          <label
            htmlFor='duration'
            className='block text-sm font-medium text-gray-300'
          >
            Duration<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='duration'
            className='mt-1 block w-full h-[42px] p-[0px_12px] bg-[rgba(11,23,57,1)] border border-[0.6px] border-[#343B4F] rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Enter Total Time'
          />
        </div>
        <div className='col-span-2'>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-300'
          >
            Description<span className='text-red-500'>*</span>
          </label>
          <textarea
            id='description'
            className='mt-1 block w-full h-[42px] p-[0px_12px] bg-[rgba(11,23,57,1)] border border-[0.6px] border-[#343B4F] rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Enter Description...'
          ></textarea>
        </div>
        <div className='col-span-2 sm:col-span-1'>
          <label
            htmlFor='number-questions'
            className='block text-sm font-medium text-gray-300'
          >
            Number Questions<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='number-questions'
            className='mt-1 block w-full h-[42px] p-[0px_12px] bg-[rgba(11,23,57,1)] border border-[0.6px] border-[#343B4F] rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Enter Total Question'
          />
        </div>
        <div className='col-span-2 sm:col-span-1'>
          <label
            htmlFor='total-marks'
            className='block text-sm font-medium text-gray-300'
          >
            Total Marks<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='total-marks'
            className='mt-1 block w-full h-[42px] p-[0px_12px] bg-[rgba(11,23,57,1)] border border-[0.6px] border-[#343B4F] rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Enter Total Marks'
          />
        </div>
        <div className='col-span-2 sm:col-span-1'>
          <label
            htmlFor='date'
            className='block text-sm font-medium text-gray-300'
          >
            Date
          </label>
          <input
            type='date'
            id='date'
            className='custom-date-icon mt-1 block w-full h-[42px] p-[0px_12px] bg-[rgba(11,23,57,1)] border border-[0.6px] border-[#343B4F] rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white'
          />
        </div>
        <div className='col-span-2 sm:col-span-1'>
          <label
            htmlFor='start-time'
            className='block text-sm font-medium text-gray-300'
          >
            Start Time
          </label>
          <input
            type='time'
            id='start-time'
            className='custom-time-icon mt-1 block w-full h-[42px] p-[0px_12px] bg-[rgba(11,23,57,1)] border border-[0.6px] border-[#343B4F] rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white'
          />
        </div>
        <div className='col-span-2 sm:col-span-1'>
          <label
            htmlFor='end-time'
            className='block text-sm font-medium text-gray-300'
          >
            End Time
          </label>
          <input
            type='time'
            id='end-time'
            className='custom-time-icon mt-1 block w-full h-[42px] p-[0px_12px] bg-[rgba(11,23,57,1)] border border-[0.6px] border-[#343B4F] rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white'
          />
        </div>
      </div>
    </div>
  );
};

export default ExamForm;
