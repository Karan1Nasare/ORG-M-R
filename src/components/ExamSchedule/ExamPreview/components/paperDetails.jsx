import React from 'react';
import { Stack } from '@mui/material';
import { FiTrash2 } from 'react-icons/fi';
import { Icon } from '@iconify/react';
import { FaRegCircleUser } from 'react-icons/fa6';

// import { useNavigate, useParams } from 'react-router-dom';
// import TabTitle from '../../shared/TabTitle';
import Button from '../../../shared/buttons/Button';

import PATH_DASHBOARD from '../../../../routes/path';
import ArrowRight from '../../../icon/ArrowRight';

const PaperDetails = ({ paperImg, paperDetails }) => {
  return (
    <div>
      <div className='flex mb-10 justify-between'>
        <div>
          <div className='flex ml-4 mt-3 text-primary'>
            <span className='mt-1 mr-2'>
              <FaRegCircleUser />
            </span>
            <h1>Basic Info</h1>
          </div>
          <div className='border-b ml-2 mt-2 w-28 border-primary ' />
        </div>
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Button
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
          >
            Manage
          </Button>
          <Button
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
            startIcon={<Icon icon='basil:edit-outline' />}
          >
            Edit
          </Button>

          <Button
            sx={{
              background: 'rgba(255,102,146,0.2)',
              color: 'rgba(255, 102, 146, 1)',
              padding: '8px 16px',
            }}
            startIcon={
              <FiTrash2 className='text-[rgba(255, 102, 146, 1)] cursor-pointer' />
            }
          >
            Delete
          </Button>

          <Button
            type='button'
            variant='contained'
            sx={{
              background: 'transparent',
              color: 'white',
              padding: '8px 16px',
            }}
            startIcon={<ArrowRight className='rotate-180' />}
          >
            Back
          </Button>
        </Stack>
      </div>
      <div className='flex'>
        <div className='h-1 mt-3 w-7 bg-primary rotate-90' />
        <h1 className='text-white text-xl text-left'>Paper Details</h1>
      </div>
      <div className='flex mt-6'>
        <div className='rounded-lg h-27.3 mt-2 mr-6 w-88 bg-secondary__fill__dark p-6'>
          <img
            src={paperImg}
            alt=''
            className='w-[237.36px] justify-center h-[336.55px]'
          />
          <h2 className='text-white text-lg mt-4 '>
            {paperDetails?.chapter || 'Chapter - 1'}
          </h2>
        </div>
        <Stack
          sx={{
            background: theme => theme.color.secondary__fill,
            padding: '20px',
            border: theme => `1px solid ${theme.color.border_color}`,
            borderRadius: '8px',
            marginTop: '10px',
            width: '100%',
            height: '27.375rem',
          }}
          direction={'row'}
        >
          <Stack spacing={5} sx={{ flex: 1 }}>
            <Stack>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Exam Title :
              </p>
              <p className='text-[rgba(255,255,255,1)] text-left'>
                {paperDetails?.title || 'N/A'}
              </p>
            </Stack>
            <Stack>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Description :
              </p>
              <p className='text-[rgba(255,255,255,1)] text-left'>
                {paperDetails?.description || 'N/A'}
              </p>
            </Stack>
            <Stack>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Standard :
              </p>
              <p className='text-[rgba(255,255,255,1)] text-left'>
                {paperDetails?.standard || 'N/A'}
              </p>
            </Stack>
            <Stack>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Number of Questions :
              </p>
              <p className='text-[rgba(255,255,255,1)] text-left'>
                {paperDetails?.numberOfQuestions || 'N/A'}
              </p>
            </Stack>
            <Stack>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Date :
              </p>
              <p className='text-[rgba(255,255,255,1)] text-left'>
                {paperDetails?.date || 'N/A'}
              </p>
            </Stack>
          </Stack>
          <Stack spacing={5} sx={{ flex: 1 }}>
            <Stack>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Duration :
              </p>
              <p className='text-[rgba(255,255,255,1)] text-left'>
                {paperDetails?.duration || 'N/A'}
              </p>
            </Stack>
            <Stack>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Address :
              </p>
              <p className='text-[rgba(255,255,255,1)] text-left'>
                {paperDetails?.address || 'N/A'}
              </p>
            </Stack>
            <Stack>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Subject :
              </p>
              <p className='text-[rgba(255,255,255,1)] text-left'>
                {paperDetails?.subject || 'N/A'}
              </p>
            </Stack>
            <Stack>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Total Marks :
              </p>
              <p className='text-[rgba(255,255,255,1)] text-left'>
                {paperDetails?.totalMarks || 'N/A'}
              </p>
            </Stack>
            <Stack>
              <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
                Exam Time :
              </p>
              <p className='text-[rgba(255,255,255,1)] text-left'>
                {paperDetails?.examTime || 'N/A'}
              </p>
            </Stack>
          </Stack>
        </Stack>
      </div>
      <div className='flex justify-end mt-6'>
        <button className='bg-white px-4 py-2 rounded-md '>Save</button>
      </div>
    </div>
  );
};

export default PaperDetails;
