import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import BannerImage from '../../assets/AddNewBanner.svg';

const AddNewBanner = () => {
  const handleFileUpload = event => {
    const file = event.target.files[0];
    if (file) {
      // You can handle the file upload logic here
      console.log('File selected:', file);
    }
  };

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-3xl text-white'>Recent Banners</h1>
        <div className='bg-white w-48 h-11 pt-2 flex justify-center rounded-md'>
          <span className='pt-1 mr-1'>
            <IoIosAddCircle />
          </span>
          <h1>Add New Banner</h1>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='mt-20 text-center relative'>
          <img className='justify-center' src={BannerImage} alt='' />
          <input
            type='file'
            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
            onChange={handleFileUpload}
            accept='image/*' // optional: restrict to image files only
          />
          <h1 className='text-white'>Please Add New Banner</h1>
        </div>
      </div>
    </div>
  );
};

export default AddNewBanner;
