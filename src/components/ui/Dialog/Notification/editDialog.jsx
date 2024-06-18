import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import AnnouncementImage from '../../../../assets/announcement_card.png';
import RichTextEditor from '../../../shared/RichTextEditor';

const EditDialogCard = ({
  id,
  initialTitle,
  initialDescription,
  heading,
  isOpen,
  onClose,
  handleUpdateNotification,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    setSelectedFile(null);
  }, [initialTitle, initialDescription]);

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const fileName = `${Date.now()}-${file.name}`;
      const imageUrl = `https://mr-education-app.s3.ap-south-1.amazonaws.com/uploads/notification/${fileName}`;

      const fileData = {
        url: imageUrl,
        mime_type: file.type,
        name: file.name,
        size: file.size,
      };

      setSelectedFile(fileData);
    }
  };

  const handleUpdateClick = () => {
    const updatedNotification = {
      title,
      description,
      image: selectedFile,
    };

    handleUpdateNotification(id, updatedNotification);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 text-start'>
      <div className='flex flex-col px-8 py-7 rounded-3xl border border-gray-700 border-solid text-start bg-secondary__fill w-42.6 max-md:px-5'>
        <div className='flex gap-5 text-xl text-white max-md:flex-wrap max-md:max-w-full'>
          <div className='flex-auto my-auto'>{heading}</div>
          <Icon
            icon={'material-symbols-light:close'}
            className='text-white cursor-pointer'
            onClick={onClose}
          />
        </div>
        <div className='shrink-0 items-center h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />

        {/* Image Section */}
        <div className='flex overflow-hidden relative rounded flex-col justify-center items-center px-20 pt-11 pb-20 mt-11 text-base text-center text-white whitespace-nowrap min-h-[158px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
          <div className='absolute inset-0 flex items-center justify-center'>
            {selectedFile ? (
              <img
                loading='lazy'
                src={selectedFile.url}
                className='object-cover w-full h-full opacity-50'
                alt='Selected Image'
              />
            ) : (
              <img
                loading='lazy'
                src={AnnouncementImage}
                className='object-cover w-full h-full opacity-50'
                alt='Default Image'
              />
            )}
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

        {/* Title Input */}
        <div className='mt-5 flex flex-col text-sm max-w-[613px]'>
          <div className='w-full text-white max-md:max-w-full'>Title</div>
          <input
            type='text'
            placeholder='Enter Title'
            className='justify-center px-3 py-3 mt-2 rounded border border-gray-700 border-solid leading-[143%] text-ellipsis text-stone-300 bg-secondary__fill max-md:max-w-full'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        {/* Description Section */}
        <div className='mt-5 text-sm text-white max-md:max-w-full'>
          Description
        </div>
        <div className='mt-2'>
          <RichTextEditor value={description} onChange={setDescription} />
        </div>

        {/* Update Button */}
        <button
          className='justify-center self-center px-7 py-3 mt-8 text-base text-center whitespace-nowrap bg-white rounded-lg text-slate-900 max-md:px-5'
          onClick={handleUpdateClick}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditDialogCard;
