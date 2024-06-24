import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@iconify/react';
import AnnouncementImage from '../../../../assets/announcement_card.png';
import RichTextEditor from '../../RichTextEditor';
import SelectField from '../../SelectField';

const EditAnnouncementCard = ({
  isOpen,
  onClose,
  announcementData,
  onUpdate,
}) => {
  if (!isOpen) {
    return null;
  }

  const [data, setData] = useState({
    title: announcementData?.title || '',
    description: announcementData?.description || '',
    totalAmount: announcementData?.total_amount || '',
    image: announcementData?.image?.url || AnnouncementImage,
    url: announcementData?.url || '',
    date: announcementData?.date || '',
    time: announcementData?.time || '',
    _method: 'PUT',
  });

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setData(prevState => ({ ...prevState, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const id = announcementData?.id;
      await onUpdate(formData);
      onClose();
    } catch (error) {
      console.error('Error editing feature:', error);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-20 text-start'>
      <div className='flex flex-col px-8 py-7 rounded-3xl border border-gray-700 border-solid text-start bg-secondary__fill w-42.6 max-md:px-5'>
        <div className='flex gap-5 text-xl text-white max-md:flex-wrap max-md:max-w-full'>
          <div className='flex-auto my-auto '>Edit Announcement</div>
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className='shrink-0 items-center h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />
        <div className='flex overflow-hidden relative rounded flex-col justify-center items-center px-20 pt-11 pb-20 mt-11 text-base text-center text-white whitespace-nowrap min-h-[158px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <img
              loading='lazy'
              src={data?.image}
              className='w-full h-52 rounded-xl mb-4 object-cover opacity-50'
            />
          </div>

          <div className='relative z-10 flex flex-col items-center justify-center'>
            <label htmlFor='fileInput' className='cursor-pointer'>
              <Icon
                icon={'uil:image-upload'}
                className='text-white text-xl mb-1'
              />
              <input
                id='fileInput'
                type='file'
                hidden
                onChange={handleFileChange}
              />
            </label>
            <span
              className='text-white text-lg cursor-pointer'
              onClick={() => document.getElementById('fileInput').click()}
            >
              Change
            </span>
          </div>
        </div>

        <div className='flex flex-wrap gap-5 content-start mt-5 text-sm '>
          <div className='flex flex-col flex-1'>
            <div className='text-white mb-2'>Select Announcement Type</div>
            <SelectField
              name='announcementType'
              label='Select an option'
              value={data.announcementType}
              onChange={handleInputChange}
              options={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ]}
              placeholder='Select'
              error={false} // Set to true to display error state
            />
          </div>
          <div className='flex flex-col flex-1'>
            <div className='text-white'>Title</div>
            <input
              type='text'
              name='title'
              placeholder='Enter Title'
              className='justify-center bg-transparent items-start px-3 py-3 mt-2 rounded border border-gray-700 border-solid leading-[143%] text-stone-300 max-md:pr-5'
              value={data.title}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='flex flex-wrap gap-5 content-start mt-5 text-sm '>
          <div className='flex flex-col flex-1'>
            <div className='text-white mb-2'>Standard</div>
            <SelectField
              name='standard'
              label='Select an option'
              value={data.standard}
              onChange={handleInputChange}
              options={[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ]}
              placeholder='Select'
              error={false} // Set to true to display error state
            />
          </div>
          <div className='flex flex-col flex-1'>
            <div className='text-white'>URL</div>
            <input
              type='text'
              name='url'
              placeholder='Enter URL'
              className='justify-center bg-transparent items-start px-3 py-3 mt-2 rounded border border-gray-700 border-solid leading-[143%] text-stone-300 max-md:pr-5'
              value={data.url}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='mt-5 text-sm text-white max-md:max-w-full'>
          Description
        </div>
        <div className='mt-2'>
          <RichTextEditor
            value={data.description}
            onChange={value =>
              setData(prevState => ({ ...prevState, description: value }))
            }
          />
        </div>
        <div className='flex flex-wrap gap-5 content-start mt-5 text-sm'>
          <div className='flex flex-col flex-1'>
            <div className='text-white'>Date</div>
            <input
              type='date'
              name='date'
              placeholder='Select a date'
              className='justify-center bg-transparent items-start px-3 py-3.5 mt-2 rounded border border-gray-700 border-solid text-stone-300 max-md:pr-5'
              value={data.date}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col flex-1'>
            <div className='text-white'>Time</div>
            <input
              type='time'
              name='time'
              placeholder='Select a time'
              className='justify-center items-start bg-transparent px-3 py-3.5 mt-2 rounded border border-gray-700 border-solid text-stone-300 max-md:pr-5'
              value={data.time}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className='justify-center self-center px-7 py-3 mt-8 text-base text-center whitespace-nowrap bg-white rounded-lg text-slate-900 max-md:px-5'
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditAnnouncementCard;
