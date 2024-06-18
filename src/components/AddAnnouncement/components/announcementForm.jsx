import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField, Grid } from '@mui/material';
import { RHFSelect, RHFTextField } from '../../../hooks/hook-form';
import RichTextEditor from '../../shared/RichTextEditor';
import ImageUpload from '../../ui/Form/ImageUpload';

const AnnouncementForm = ({
  announcement,
  selectedFile,
  setSelectedFile,
  onChange,
  handleAddAnnouncement,
}) => {
  const { control } = useFormContext();
  const [file, setFile] = useState();

  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <>
      <div className='flex justify-end mb-4'>
        <div className='w-44'>
          <RHFSelect
            size='small'
            name='Select'
            options={[
              { label: 'Student', value: 'Student' },
              { label: 'Staff', value: 'Staff' },
            ]}
          />
        </div>
      </div>
      <main className='flex flex-col justify-center p-8 rounded-xl border border-gray-700 border-solid bg-[#0B1739] max-md:px-5'>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ImageUpload src={''} setFile={setFile} />
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <section className='flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col'>
                <label
                  htmlFor='title'
                  className='text-sm text-white max-md:max-w-full text-left mb-2'
                >
                  Select Announcement Type
                </label>
                <RHFSelect
                  size='small'
                  name='Select Announcement Type'
                  options={[{ label: 'Event', value: 'Event' }]}
                />
              </div>
              <div className='flex flex-col mt-4'>
                <label
                  htmlFor='title'
                  className='text-sm text-white max-md:max-w-full text-left'
                >
                  Title
                </label>
                <RHFTextField
                  className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
                  placeholder='Enter Exam Title'
                  name='examTitle'
                  defaultValue=''
                  control={control}
                />
              </div>
              <div className='flex flex-col mt-4'>
                <label
                  htmlFor='Standard'
                  className='text-sm text-white max-md:max-w-full text-left mb-2'
                >
                  Standard
                </label>
                <RHFSelect
                  size='small'
                  name='Select Announcement Type'
                  options={[{ label: 'Event', value: 'Event' }]}
                />
              </div>
              <div>
                <p className='mt-8 text-sm max-md:max-w-full text-left text-white'>
                  Description<span className='text-red-600'>*</span>
                </p>
                <RichTextEditor />
              </div>

              <div className='flex space-x-4 mt-4'>
                <div className='flex flex-col w-1/2'>
                  <label
                    htmlFor='date'
                    className='text-sm text-white max-md:max-w-full text-left mb-2'
                  >
                    Date
                  </label>
                  <TextField
                    id='date'
                    type='date'
                    fullWidth
                    className='justify-center items-start bg-[#0B1739] px-3 py-3 mt-2 text-sm leading-5 rounded border border-[#343B4F] border-solid text-stone-300 max-md:pr-5 max-md:max-w-full'
                    //   onChange={e => handleDateChange('date', e.target.value)}
                  />
                </div>

                <div className='flex flex-col w-1/2'>
                  <label
                    htmlFor='time'
                    className='text-sm text-white max-md:max-w-full text-left mb-2'
                  >
                    Time
                  </label>
                  <TextField
                    id='time'
                    type='time'
                    fullWidth
                    className='justify-center items-start bg-[#0B1739] px-3 py-3 mt-2 text-sm leading-5 rounded border border-[#343B4F] border-solid text-stone-300 max-md:pr-5 max-md:max-w-full'
                    //   onChange={e => handleDateChange('time', e.target.value)}
                  />
                </div>
              </div>
            </section>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default AnnouncementForm;