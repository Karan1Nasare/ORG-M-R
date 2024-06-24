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

const StaffCard = ({ data }) => {
  console.log('🚀 ~ StaffCard ~ data:', data);
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/staffInformation');
  };
  return (
    <Card
      style={{
        backgroundColor: '#0B1739',
        color: 'white',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
      className='p-0 w-full shadow-lg'
    >
      <CardContent className='flex flex-col items-start p-6 gap-3'>
        <div className='flex items-center mb-4 w-full'>
          <Avatar
            alt={data?.name}
            src={data?.image}
            style={{ width: '80px', height: '80px' }}
            className='mr-4'
          />
          <div className='flex-1'>
            <Typography variant='h6' className='font-helvetica text-start'>
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
              className='text-gray-400 font-helvetica text-sm'
            >
              {data?.phone}
            </Typography>
          </div>
          <IconButton onClick={handleOnClick} className='text-white'>
            <FaEye style={{ fontSize: '1.2em', color: 'white' }} />
          </IconButton>
        </div>
        {data?.staff_details?.classes && (
          <div className='w-full flex items-center gap-2 mb-2'>
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
                  className='px-2 py-1 rounded-full font-helvetica'
                >
                  {cls}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className='w-full flex flex-wrap gap-1 mt-2'>
          {data?.staff_details?.subjects?.map((subject, index) => (
            <span
              key={index}
              style={{
                backgroundColor: 'rgba(54, 199, 108, 0.2)',
                color: '#36C76C',
              }}
              className='px-2 py-1 rounded-full font-helvetica'
            >
              {subject}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StaffCard;
