import { TextField, Typography } from '@mui/material';
import React from 'react';
import RichTextEditor from '../RichTextEditor';

const AddFeatureDetails = ({ onChange, feature }) => {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className='bg-secondary__fill h-full w-34 mt-4 p-8 rounded-lg'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col items-start'>
          <div className='mb-3'>
            <Typography variant='cardDescription'>Feature Name</Typography>
          </div>
          <TextField
            name='name'
            placeholder='Enter feature name'
            type='text'
            fullWidth
            onChange={handleInputChange}
            value={feature?.name}
          />
        </div>
        <div className='flex flex-col items-start'>
          <div className='mb-3'>
            <Typography variant='cardDescription'>GST</Typography>
          </div>
          <TextField
            placeholder='Enter GST'
            type='text'
            fullWidth
            name='gst'
            onChange={handleInputChange}
            value={feature?.gst}
          />
        </div>
      </div>
      <div className='flex flex-col mt-10 '>
        <div className='mb-3 text-start'>
          <Typography variant='cardDescription'>
            Description<span className='text-red-500'>*</span>
          </Typography>
        </div>
        <RichTextEditor
          onChange={handleInputChange}
          value={feature?.description}
        />
      </div>
      <div className='grid grid-cols-2 gap-4 mt-10'>
        <div className='flex flex-col items-start'>
          <div className='mb-3'>
            <Typography variant='cardDescription'>Rate (Amount)</Typography>
          </div>
          <TextField
            placeholder='Enter Rate'
            type='text'
            fullWidth
            name='rate'
            onChange={handleInputChange}
            value={feature?.rate}
          />
        </div>
        <div className='flex flex-col items-start'>
          <div className='mb-3'>
            <Typography variant='cardDescription'>Total Amount</Typography>
          </div>
          <TextField
            variant='outlined'
            placeholder='Enter Total Amount'
            type='text'
            fullWidth
            name='totalAmount'
            onChange={handleInputChange}
            value={feature?.totalAmount}
          />
        </div>
      </div>
    </div>
  );
};

export default AddFeatureDetails;
