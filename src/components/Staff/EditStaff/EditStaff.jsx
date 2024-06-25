import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormProvider,
  RHFMultiSelect,
  RHFTextField,
} from '../../../hooks/hook-form';
import AddStaffForm from './EdtStaffForm';
import Button from '../../shared/buttons/Button';
import TabTitle from '../../shared/TabTitle';
import useAddStaff from './hooks/useEditStaff';

const EditStaff = ({ setValue, staffDataById }) => {
  console.log('🚀 ~ EditStaff ~ staffDataById:', staffDataById?.staff_details);
  const { onAddStaff } = useAddStaff();
  const [file, setFile] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const methods = useForm({
    defaultValues: {
      organisation: staffDataById?.organisation || [],
      class: staffDataById?.staff_details?.class || [],
      primary_class: staffDataById?.staff_details?.primary_class || [],
      subject: staffDataById?.staff_details?.subject || [],
      standard: staffDataById?.staff_details?.standard || [],
      name: staffDataById?.name || '',
      email: staffDataById?.email || '',
      phone: staffDataById?.staff_details?.phone || '',
      staff_id: staffDataById?.staff_details?.staff_id || '',
      address: staffDataById?.staff_details?.address || '',
      city: staffDataById?.staff_details?.city || '',
      state: staffDataById?.staff_details?.state || '',
      degree: staffDataById?.staff_details?.degree || '',
      password: '',
      password_confirmation: '',
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  // useEffect(() => {
  //   if (staffDataById) {
  //     reset(staffDataById);
  //   }
  // }, [staffDataById, reset]);

  const onSubmit = async data => {
    console.debug('onSubmit', file);
    console.debug('onSubmit', data);
    const formData = new FormData();

    const multiSelectFields = [
      'organisation',
      'class',
      'primary_class',
      'subject',
      'standard',
    ];
    multiSelectFields.forEach(field => {
      formData.append(field, JSON.stringify(data[field]));
    });

    Object.entries(data).forEach(([key, value]) => {
      if (!multiSelectFields.includes(key)) {
        formData.append(key, value);
      }
    });

    formData.append('image', file[0]);
    formData.append('subject_id', '1');

    onAddStaff(formData);
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <TabTitle title='Edit Staff Details' sx={{ marginTop: '20px' }} />

        <div className='mt-3'>
          <AddStaffForm file={file} setFile={setFile} />
          <div className='text-sm w-full mt-5 font-medium text-center bg-[#0B1739] text-gray-500 p-6 rounded-md flex items-center justify-between'>
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
              <button type='submit'>Edit Staff</button>
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default EditStaff;
