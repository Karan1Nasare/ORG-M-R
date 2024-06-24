import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import RichTextEditor from '../../shared/RichTextEditor';
import { RHFTextField } from '../../../hooks/hook-form';

const AddNotificationForm = ({ selectedFile, setSelectedFile }) => {
  const { control } = useFormContext();

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
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
                <RHFTextField
                  name='title'
                  placeholder='Enter Title'
                  type='text'
                  fullWidth
                  required
                />
                <div className='mt-8 text-sm text-white text-left max-md:max-w-full'>
                  Description
                </div>
                <div className='flex flex-col mt-2 rounded border border-gray-700 border-solid w-full max-w-screen mx-auto grow'>
                  <Controller
                    name='description'
                    control={control}
                    render={({ field }) => (
                      <RichTextEditor
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotificationForm;
