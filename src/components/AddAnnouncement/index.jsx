import React from 'react';
import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import AnnouncementForm from './components/announcementForm';

const AddAnnouncement = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = async data => {
    console.log('onSubmit', data);
    // setShowForm(false);
  };

  return (
    <>
      <Typography className='flex align-items-start' variant='mainLayoutTitle'>
        Add Announcement
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AnnouncementForm />
          <div className='flex justify-end mt-6 '>
            <Button variant='outline-add-button' startIcon={<AddCircleIcon />}>
              Add Announcement
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddAnnouncement;
