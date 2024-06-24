import { Typography } from '@mui/material';
import React from 'react';

import AnnouncementImage from '../../../assets/announcement_card.png';

function InfoItem({ label, value }) {
  return (
    <div className='mt-1.5 text-xs text-orange__primary capitalize'>
      {label} : {value}
    </div>
  );
}

const PreviewDialog = ({ heading, data, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-20 text-start'>
      <div className='bg-secondary__fill w-42.6 rounded-xl border border-gray-700 border-solid p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-white text-lg'>{heading}</h2>
          <button
            className='text-white text-xl'
            onClick={onClose}
            aria-label='Close'
          >
            &times;
          </button>
        </div>
        <div className='border-b border-gray-700 mb-4'></div>
        <img
          className='w-full h-52 rounded-xl mb-4 object-cover'
          src={data?.image?.url || AnnouncementImage}
          alt='Preview Image'
        />

        <div className='mb-4'>
          {data?.type === 'Student' ||
            (data?.type === 'student' && (
              <div className='justify-center w-20 truncate text-center px-2 py-1 mt-5 text-sm font-semibold text-success bg-success whitespace-nowrap bg-green-500 bg-opacity-20 rounded-full inline-block'>
                {data?.standard}
              </div>
            ))}
        </div>
        <div className='text-white mb-5'>
          <div>
            <Typography variant='h5' className='text-lg'>
              {data?.title}
            </Typography>
          </div>
          <div className='mt-2'>
            <Typography variant='h6' className='text-grey__primary__light '>
              Leave www.mandreducation.com
            </Typography>
          </div>
        </div>
        <Typography variant='cardDescription' className='text-white '>
          {data?.description}
        </Typography>
        <div className='flex'>
          <InfoItem label='Date' value={data?.date || '16-06-2024'} />
          &nbsp;
          <InfoItem label='Time' value={data?.time || '09:45AM'} />
        </div>
      </div>
    </div>
  );
};

export default PreviewDialog;
