import React from 'react';
import { FaEye } from 'react-icons/fa';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StaffCard = ({ data, onDelete }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/staff/staffInformation', {
      state: { staffData: data },
    });
  };

  const subjects = [
    'Math',
    'Science',
    'Mathematics',
    'SocialScience',
    'History',
  ];
  return (
    <Card
      style={{
        backgroundColor: '#0B1739',
        color: 'white',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        height: '187px',
      }}
      className='p-7 w-full shadow-lg'
    >
      <div className='flex flex-col items-start'>
        <div className='flex justify-between mb-2 w-full'>
          <div className='flex'>
            <Avatar
              alt={data?.name}
              src={data?.staff_details?.image?.url}
              style={{ width: '57px', height: '57px' }}
              className='mr-4'
            />
            <div>
              <Typography variant='h5' className='font-helvetica text-start'>
                {data?.name}
              </Typography>
              <Typography
                variant='body2'
                className='text-gray-400 font-helvetica text-sm text-start'
              >
                {data?.email}
              </Typography>
              <Typography
                variant='body2'
                className='text-gray-400 text-left font-helvetica text-sm'
              >
                {data?.staff_details?.phone}
              </Typography>
            </div>
          </div>

          <span onClick={handleOnClick} className=' text-white'>
            <FaEye style={{ fontSize: '1.4em', color: 'white' }} />
          </span>
        </div>
        {/* {data?.staff_details?.classes && ( */}
        <div className='w-full pt-1 flex items-center gap-2 mb-2'>
          <Typography
            variant='body2'
            className='text-gray-400 font-helvetica text-sm'
          >
            Primary Class -
          </Typography>
          <div className='flex flex-wrap gap-1'>
            {data?.staff_details?.classes?.map((cls, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: 'rgba(54, 199, 195, 0.2)',
                  color: '#36C7C3',
                }}
                className='px-2 h-6 w-11 rounded-full font-helvetica'
              >
                50
                {cls}
              </span>
            ))}
          </div>
        </div>
        <div className='flex w-full overflow-x-scroll pt-1 gap-1'>
          {data?.staff_details?.primary_courses?.map((subject, index) => (
            <span
              key={index}
              style={{
                backgroundColor: 'rgba(54, 199, 108, 0.2)',
                color: '#36C76C',
              }}
              className='px-2 h-6 text-sm rounded-full font-helvetica'
            >
              {subject.name}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default StaffCard;
