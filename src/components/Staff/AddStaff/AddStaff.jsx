/*   import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

import AddStaffForm from './AddStaffForm';
import {
  FormProvider,
  RHFMultiSelect,
  RHFSelect,
  RHFTextField,
} from '../../../hooks/hook-form';
import Button from '../../shared/buttons/Button';
import colors from '../../../theme/colors';
import { useStore } from '../../../store/context-store';
import TabTitle from '../../shared/TabTitle';
import useAddStaff from './hooks/useAddStaff';

// const staffSchema = object({
//   organisation: string().required('Select at least one organization'),
//   class: string().required('Select at least one class'),
//   primary_class: string().required('Select at least one primary class'),
//   name: string().required('Staff Full Name is required'),
//   email: string().email('Invalid email').required('Staff Email is required'),
//   phone: string().required('Phone Number is required'),
//   staff_id: string().required('Staff ID is required'),
//   subject: string().required('Select at least one subject'),
//   standard: string().required('Select at least one standard'),
//   address: string().required('Address is required'),
//   city: string().required('City is required'),
//   state: string().required('State is required'),
//   degree: string().required('Degree is required'),
//   password: string()
//     .min(8, 'Password must be at least 8 characters')
//     .required('Password is required'),
//   password_confirmation: string()
//     .oneOf([string().ref('password')], 'Passwords must match')
//     .required('Confirm Password is required'),
// });

const AddStaff = ({ setValue }) => {
  const { onAddStaff } = useAddStaff();
  const [file, setFile] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [Store, StoreDispatch] = useStore();

  const onSubmit = async data => {
    console.debug('onSubmit', file);
    console.debug('onSubmit', data);
    const formData = new FormData();

    // Append form fields to the FormData object using Object.entries
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append('image', file[0]);
    formData.append('subject_id', '1');

    onAddStaff(formData);
  };

  const methods = useForm({
    defaultValues: {
      organisation: [],
      class: [],
      primary_class: [],
      subject: [],
      standard: [],
    },
  });
  const {
    control,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = methods;

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <TabTitle title='Add Students Details' sx={{ marginTop: '20px' }} />

        <div className='mt-3'>
          <AddStaffForm file={file} setFile={setFile} />
          <div className='text-sm w-full mt-5 font-medium text-center bg-[#0B1739] text-gray-500   p-6 rounded-md flex items-center justify-between'>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <label
                  htmlFor='organization'
                  className='block text-sm text-white text-start mb-2'
                >
                  Organization
                </label>
                <RHFMultiSelect
                  name='organisation'
                  options={[
                    { label: 'Organization 1', value: 'Organization 1' },
                    { label: 'Organization 2', value: 'Organization 2' },
                  ]}
                  placeholder='Select Organization'
                  chip
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <label
                  htmlFor='class'
                  className='block text-sm text-white text-start mb-2'
                >
                  Class
                </label>
                <RHFMultiSelect
                  size='small'
                  name='class'
                  options={[
                    { label: 'Class 1', value: 'Class 1' },
                    { label: 'Class 2', value: 'Class 2' },
                  ]}
                  placeholder='Select Class'
                  chip
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <label
                  htmlFor='primary_class'
                  className='block text-sm text-white text-start mb-2'
                >
                  Primary Class
                </label>
                <RHFMultiSelect
                  size='small'
                  name='primary_class'
                  options={[
                    { label: 'Primay Class 1', value: 'Primay Class 1' },
                    { label: 'Primay Class 2', value: 'Primay Class 2' },
                  ]}
                  placeholder='Select Primary Class'
                  chip
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='name'
                  type='text'
                  label='Staff Full Name'
                  placeholder='Enter Staff Full Name'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='email'
                  type='email'
                  label='Staff Email*'
                  placeholder='Enter Staff Email'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='phone'
                  type='number'
                  label='Phone Number'
                  placeholder='Enter Phone Number'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='staff_id'
                  type='text'
                  label='ID'
                  placeholder='Enter ID'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <label
                  htmlFor='class'
                  className='block text-sm text-white text-start mb-2'
                >
                  Subject
                </label>
                <RHFMultiSelect
                  size='small'
                  name='subject'
                  options={[
                    { label: 'Subject 1', value: 'Subject 1' },
                    { label: 'Subject 2', value: 'Subject 2' },
                  ]}
                  placeholder='Select Subject'
                  chip
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <label
                  htmlFor='standard'
                  className='block text-sm text-white text-start mb-2'
                >
                  Standard
                </label>
                <RHFMultiSelect
                  size='small'
                  name='standard'
                  options={[
                    { label: 'Standard 1', value: 'Standard 1' },
                    { label: 'Standard 2', value: 'Standard 2' },
                  ]}
                  placeholder='Select Standard'
                  chip
                />
              </Grid>

              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='address'
                  type='text'
                  label='Address'
                  placeholder='814 Howard Street, 120065, India'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='city'
                  type='text'
                  label='City*'
                  placeholder='Enter City'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='state'
                  type='text'
                  label='State*'
                  placeholder='Enter State'
                  fullWidth
                  required
                />
              </Grid>

              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='degree'
                  type='text'
                  label='Degree'
                  placeholder='Enter Degree'
                  fullWidth
                  required
                />
              </Grid>

              <Grid item md={6} sm={12}>
                <label
                  htmlFor='password'
                  className='block text-sm text-white text-start mb-2'
                >
                  Password
                </label>
                <Controller
                  name='password'
                  render={({ field }) => (
                    <TextField
                      {...field}
                      control={control}
                      type={showPassword ? 'text' : 'password'}
                      variant='outlined'
                      fullWidth
                      size='small'
                      error={!!errors?.password}
                      helperText={
                        errors?.password ? errors?.password.message : ''
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge='end'
                            >
                              {showPassword ? (
                                <VisibilityOff sx={{ color: 'white' }} />
                              ) : (
                                <Visibility sx={{ color: 'white' }} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <label
                  htmlFor='password_confirmation'
                  className='block text-sm text-white text-start mb-2'
                >
                  Confirm Password
                </label>
                <Controller
                  name='password_confirmation'
                  render={({ field }) => (
                    <TextField
                      {...field}
                      control={control}
                      type={showConfirmPassword ? 'text' : 'password'}
                      variant='outlined'
                      fullWidth
                      size='small'
                      error={!!errors?.confirmPassword}
                      helperText={
                        errors?.confirmPassword
                          ? errors?.confirmPassword.message
                          : ''
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              edge='end'
                            >
                              {showConfirmPassword ? (
                                <VisibilityOff sx={{ color: 'white' }} />
                              ) : (
                                <Visibility sx={{ color: 'white' }} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </div>
          <div className='flex mt-3 justify-end'>
            <div className=' pt-2 rounded bg-white h-11 w-40'>
              <button>Add Staff 1234</button>
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default AddStaff;
