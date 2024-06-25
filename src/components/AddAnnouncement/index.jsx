import React from 'react';
import { Button, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import back from '../icon/back.svg';
import AnnouncementForm from './components/announcementForm';
import useAddAnnouncement from './hooks/useAddAnnouncement';

const AddAnnouncement = () => {
  const navigate = useNavigate();
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
  const handleBackClick = () => {
    navigate('/announcements');
  };

  return (
    <>
      <div className='flex justify-between'>
        <Typography
          className='flex align-items-start'
          variant='mainLayoutTitle'
        >
          Add Announcement
        </Typography>
        <div
          onClick={handleBackClick}
          className='flex items-center mb-4 cursor-pointer'
        >
          <img src={back} alt='' className='text-white w-8 h-8 mr-1' />
          <button className='text-white text-2xl'>Back</button>
        </div>
      </div>
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
