import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import RichTextEditor from '../../shared/RichTextEditor';

const AddNotificationForm = ({
  notification,
  selectedFile,
  setSelectedFile,
  onChange,
  handleAddNotification,
}) => {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      const fileName = `${Date.now()}-${file?.name}`;
      const imageUrl = `https://mr-education-app.s3.ap-south-1.amazonaws.com/uploads/notification/${fileName}`;

      const fileData = {
        url: imageUrl,
        mime_type: file?.type,
        name: file?.name,
        size: file?.size,
      };

      setSelectedFile(fileData);
    }
  };

  return (
    <div>
      <div className='flex flex-col justify-center p-8 rounded-xl w-full max-w-screen mx-auto border border-gray-700 border-solid bg-secondary__fill max-md:px-5'>
        <div className=' w-full max-w-screen mx-auto h-88'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            {/* Left Div */}
            <div className='flex flex-col w-[23%] max-md:ml-0 max-md:w-full h-full'>
              <div className='flex flex-col justify-center items-center w-full rounded-full border border-gray-700 border-solid aspect-square bg-secondary__fill max-md:px-5 max-md:mt-8 h-full overflow-hidden'>
                {selectedFile ? (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt='Selected File'
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <label
                    htmlFor='file-upload'
                    className='flex justify-center items-center w-full h-full rounded-full border border-white border-dashed max-md:px-5 cursor-pointer'
                  >
                    <UploadFileIcon
                      style={{ fontSize: '3em', color: 'white' }}
                    />
                    <input
                      id='file-upload'
                      type='file'
                      accept='image/*'
                      hidden
                      onChange={handleFileChange}
                    />
                  </label>
                )}
              </div>
            </div>
            {/* Right Div */}
            <div className='flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full pr-[1%] h-full'>
              <div className='flex flex-col grow max-md:mt-8 max-md:max-w-full h-full'>
                <div className='text-sm text-left text-white max-md:max-w-full'>
                  Title
                </div>
                <input
                  type='text'
                  placeholder=' Enter Title'
                  className='justify-center bg-secondary__fill items-start px-3 py-3 mt-2 text-sm leading-5 rounded border border-gray-700 border-solid text-stone-300 max-md:pr-5 max-md:max-w-full'
                  onChange={handleInputChange}
                  value={notification?.title}
                />
                <div className='mt-8 text-sm text-white text-left max-md:max-w-full'>
                  Description
                </div>
                <div className='flex flex-col mt-2 rounded border border-gray-700 border-solid  w-full max-w-screen mx-auto grow'>
                  <RichTextEditor
                    onChange={handleInputChange}
                    value={notification?.description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className='flex items-center gap-2.5 px-4 py-2.5 mt-8 float-right text-base text-center bg-white rounded-lg text-secondary__fill'
        onClick={handleAddNotification}
      >
        <Icon icon='fluent:add-circle-20-regular' />
        <span className='my-auto'>Add Notification</span>
      </button>
    </div>
  );
};

export default AddNotificationForm;
