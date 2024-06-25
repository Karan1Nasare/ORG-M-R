// Components/Header.js

import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  FormProvider, // Import FormProvider
  RHFSelect, // Import RHFSelect
  RHFTextField, // Import RHFTextField
} from '../../../hooks/hook-form';

const Header = () => {
  const navigate = useNavigate();

  const handleAddStaffClick = () => {
    navigate('/staff/addStaff');
  };
  const methods = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async data => {
    console.debug('onSubmit');
    console.debug('onSubmit', data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className='bg-secondary__fill py-9 w-full max-w-screen mx-auto flex justify-between h-28 border p-7 border-gray-700 rounded-xl '>
        <div className='flex'>
          <input
            type='text'
            placeholder='Search Name, Enrollment, Standard'
            className='w-80 flex p-2 text-white bg-secondary__fill__dark h-10'
          />
          <div className='flex'>
            <div className='w-36 border h-10 border-gray-700 flex rounded-md ml-3'>
              <RHFSelect
                size='small'
                name='plan_type'
                options={[
                  { label: 'Bronze', value: 'bronze' },
                  { label: 'Silver', value: 'silver' },
                  { label: 'Gold', value: 'gold' },
                ]}
              />
            </div>
            <div className='w-36 border h-10 border-gray-700 rounded-md ml-3'>
              <RHFSelect
                size='small'
                name='plan_type'
                options={[
                  { label: 'Bronze', value: 'bronze' },
                  { label: 'Silver', value: 'silver' },
                  { label: 'Gold', value: 'gold' },
                ]}
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleAddStaffClick}
          className='bg-white w-28 p-1 h-10 rounded-md flex justify-center'
        >
          <span className='pt-[8%] mr-1'>
            <FaUserPlus />
          </span>
          <h2 className='pt-1'>Add Staff</h2>
        </button>
      </div>
    </FormProvider>
  );
};

export default Header;
