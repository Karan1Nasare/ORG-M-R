import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

import colors from '../../../theme/colors';

const AnnouncementHeader = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('');
  console.log('🚀 ~ AnnouncementHeader ~ inputValue:', inputValue);
  const handleInputChange = e => {
    setInputValue(e?.target?.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onChange(inputValue);
    }
  };
  return (
    <div className='flex items-center justify-between bg-secondary__fill p-5 rounded-md border border-grey__primary__light border-opacity-20'>
      <TextField
        className='w-4/12'
        variant='outlined'
        placeholder='Search Name, Inrollment, Standerd'
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        InputProps={{
          sx: {
            height: '2.5rem !important',
            background: colors.secondary__fill__dark,
            border: 'none',
            borderRadius: '0.375rem',
          },
        }}
      />
      <Link to='/announcements/addAnnouncement'>
        <Button variant='outline-add-button' startIcon={<AddCircleIcon />}>
          Add Announcement
        </Button>
      </Link>
    </div>
  );
};

export default AnnouncementHeader;
