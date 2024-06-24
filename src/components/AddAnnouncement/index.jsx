import React from 'react';
import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import AnnouncementForm from './components/announcementForm';
import useAddAnnouncement from './hooks/useAddAnnouncement';

const AddAnnouncement = () => {
  const { onAddAnnouncement, eventList } = useAddAnnouncement();
  const methods = useForm();
  const { handleSubmit, setValue, getValues } = methods;

  const onSubmit = data => {
    console.log('Submitted data:', data);
    const formData = new FormData();

    // Append form fields to the FormData object using Object.entries
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    onAddAnnouncement(data);
  };

  return (
    <>
      <Typography className='flex align-items-start' variant='mainLayoutTitle'>
        Add Announcement
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AnnouncementForm setValue={setValue} eventList={eventList} />
          <div className='flex justify-end mt-6 '>
            <Button
              type='submit'
              variant='outline-add-button'
              startIcon={<AddCircleIcon />}
            >
              Add Announcement
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddAnnouncement;
