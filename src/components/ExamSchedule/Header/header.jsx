import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import {
  FormProvider, // Import FormProvider
  RHFSelect, // Import RHFSelect
} from '../../../hooks/hook-form';

const Header = () => {
  const methods = useForm({});
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async data => {
    console.log('submit');
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className='flex'>
          <div className='h-1 mt-3 w-7 bg-primary rotate-90' />
          <h1 className='text-white text-xl text-left'>Select Paper</h1>
        </div>
        <div className='bg-secondary__fill h-28 border rounded-xl mt-4 border-gray-700 w-full max-w-screen mx-auto'>
          <div className='flex'>
            <input
              type='text'
              placeholder='Search Name, Inrollment, Standerd'
              className='w-80 ml-8 mt-8 p-2 mr-2 bg-secondary__fill__dark h-10 rounded text-white'
            />
            <div className='h-10 mt-8 bg-secondary__fill__dark mr-2 border rounded-md border-gray-700 w-36'>
              <RHFSelect
                size='small'
                name='Select_Std'
                options={[
                  { label: '10th', value: '10th' },
                  { label: '11th', value: '11th' },
                  { label: '12th', value: '12th' },
                ]}
              />
            </div>
            <div className='h-10 mt-8 bg-secondary__fill__dark border rounded-md border-gray-700 w-40'>
              <RHFSelect
                size='small'
                name='Select_Subject'
                options={[
                  { label: 'Social Science', value: 'Social Science' },
                  { label: 'Math', value: 'Math' },
                  { label: 'Chemistry', value: 'Chemistry' },
                ]}
              />
            </div>
            <div className='text-white mt-10 ml-2 flex'>
              <span className='mr-1'>
                <IoCloseOutline style={{ fontSize: '1.5rem' }} />
              </span>
              <h2>Clear All</h2>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};
export default Header;
