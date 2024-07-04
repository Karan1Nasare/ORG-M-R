/*   import/no-extraneous-dependencies */

import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';
import {
  Autocomplete,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import toast from 'react-hot-toast';
import AddStudentForm from './AddStudentForm';
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from '../../../hooks/hook-form';
import { useStore } from '../../../store/context-store';
import TabTitle from '../../shared/TabTitle';
import useFetcher from '../../../hooks/useFetcher';
import {
  addNewStudent,
  getAllCities,
  getAllCourses,
  getStates,
} from '../../../service/student';
import TextField from '../../shared/input/TextField';
import Button from '../../shared/buttons/Button';

const AddStudent = () => {
  const [file, setFile] = useState();
  const [showPass, setShowPass] = useState(false);
  const { fetcher } = useFetcher();

  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [Store, StoreDispatch] = useStore();
  const [states, setState] = useState([]);
  const [cities, setCities] = useState([]);
  const [course, setCourse] = useState([]);
  const studentSchema = z
    .object({
      course_id: z.string().min(1, 'Course is required'),
      name: z.string().min(1, 'Name is required'),
      email: z
        .string()
        .email('Invalid email address')
        .min(1, 'Email is required'),
      phone_number: z
        .string()
        .min(10, 'Phone number must be at least 10 characters long')
        .max(15, 'Phone number must be at most 15 characters long')
        .min(1, 'Phone Number is required'),
      gender: z.enum(['Male', 'Female', 'Other'], 'Gender is required'),
      address: z.string().min(1, 'Address is required'),
      city: z.string().min(1, 'City is required'), // Assuming city is a string
      state: z.string().min(1, 'State is required'),
      pincode: z
        .string()
        .length(6, 'Pincode must be exactly 6 characters long')
        .min(1, 'Pincode is required'),
      parents_name: z.string().min(1, "Parent's name is required"),
      parents_phone_number: z
        .string()
        .min(10, "Parent's phone number must be at least 10 characters long")
        .max(15, "Parent's phone number must be at most 15 characters long")
        .min(1, "Parent's Phone Number is required"),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .min(1, 'Password is required'),
      confirmPassword: z.string().min(1, 'Confirm Password is required'),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    });

  const methods = useForm({});

  const {
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();
  console.debug('values', errors, values);

  useEffect(() => {
    if (file && file.length > 0) {
      setValue('image', file[0]);
    } else {
      setValue('image', null);
    }
  }, [file]);

  const onSubmit = data => {
    console.debug('onSubmit', file);
    console.debug('onSubmit', data);

    fetcher({
      key: 'add_student',
      executer: () => addNewStudent(data),
      onSuccess: res => {
        console.log('Response:', res);
      },
      onFailure: err => {
        console.error(
          'Error while adding student',
          err?.response?.data?.message,
        );
      },
      showSuccessToast: true,
      showErrorToast: true,
      onSuccessRoute: '/student',
    });
  };

  useEffect(() => {
    setCities([]);
    if (values?.state) {
      fetcher({
        key: 'get_city',
        executer: () => getAllCities({ state_id: values?.state }),
        onSuccess: res => {
          setCities(res?.data?.data);
          // Uncomment the following line if you need to set a default city value
          // setValue('standard', parseInt(res?.data?.data[0]?.id, 10));
        },
        showSuccessToast: false,
      });
    }
  }, [values?.state]);

  useEffect(() => {
    fetcher({
      key: 'get_state',
      executer: () => getStates(),
      onSuccess: res => {
        setState(res?.data?.data);
        // setValue('standard', parseInt(res?.data?.data[0]?.id, 10));
      },
      showSuccessToast: false,
    });
  }, []);

  useEffect(() => {
    fetcher({
      key: 'get_course',
      executer: () => getAllCourses(),
      onSuccess: res => {
        setCourse(res?.data?.data);
        // setValue('standard', parseInt(res?.data?.data[0]?.id, 10));
      },
      showSuccessToast: false,
    });
  }, []);

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <TabTitle title='Add Students Details' sx={{ marginTop: '20px' }} />
        <div className='mt-3'>
          <AddStudentForm file={file} setFile={setFile} />
          {errors && errors?.image && (
            <p className='text-red-500 text-left'>{errors?.image?.message}</p>
          )}
          <div className='text-sm w-full mt-5 font-medium border border-gray-700 text-center bg-[#0B1739] text-gray-500 p-6 rounded-xl flex items-center justify-between'>
            <Grid container spacing={4}>
              <Grid item md={6}>
                <Autocomplete
                  freeSolo
                  fullWidth
                  id='free-solo-2-demo'
                  disableClearable
                  sx={{
                    '& .MuiInputBase-root': {
                      padding: '0px',
                    },
                    '& .MuiInputBase-input': {
                      border: 'none',
                      padding: '7.5px 13px !important',
                    },
                  }}
                  options={
                    course
                      ? course.map(state => ({
                          label: state.name,
                          value: state.id?.toString(),
                        }))
                      : []
                  }
                  onChange={(event, newValue) => {
                    setValue('course_id', newValue ? newValue.value : null, {
                      shouldValidate: true,
                    });
                  }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='Course*'
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='name'
                  label='Student Name*'
                  placeholder='Enter name'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='email'
                  type='email'
                  label='Email*'
                  placeholder='Enter Email'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='phone_number'
                  type='number'
                  label='Phone Number*'
                  placeholder='Enter Phone Number'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <Typography sx={{ textAlign: 'left' }}>Gender</Typography>
                <RHFSelect
                  size='small'
                  name='gender'
                  type='number'
                  placeholder='Gender'
                  fullWidth
                  required
                  sx={{ textAlign: 'left' }}
                  options={[
                    {
                      label: 'Male',
                      value: 'Male',
                    },
                    {
                      label: 'Female',
                      value: 'Female',
                    },
                  ]}
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='parents_name'
                  type='text'
                  label='Parent Name*'
                  placeholder='Enter Name'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='parents_phone_number'
                  type='number'
                  label='Parent Phone Numbers*'
                  placeholder='Enter Phone Number'
                  fullWidth
                  required
                />
              </Grid>

              <Grid item md={6}>
                <Autocomplete
                  freeSolo
                  fullWidth
                  id='free-solo-2-demo'
                  disableClearable
                  sx={{
                    '& .MuiInputBase-root': {
                      padding: '0px',
                    },
                    '& .MuiInputBase-input': {
                      border: 'none',
                      padding: '7.5px 13px !important',
                    },
                  }}
                  options={
                    states
                      ? states.map(state => ({
                          label: state.name,
                          value: state.id?.toString(),
                        }))
                      : []
                  }
                  onChange={(event, newValue) => {
                    setValue('state', newValue ? newValue.value : null, {
                      shouldValidate: true,
                    });
                  }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='State'
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item md={6}>
                <Autocomplete
                  freeSolo
                  fullWidth
                  id='free-solo-2-demo1'
                  disableClearable
                  sx={{
                    '& .MuiInputBase-root': {
                      padding: '0px',
                    },
                    '& .MuiInputBase-input': {
                      border: 'none',
                      padding: '7.5px 13px !important',
                    },
                  }}
                  options={
                    cities
                      ? cities.map(city => ({
                          label: city.name,
                          value: city.id?.toString(),
                        }))
                      : []
                  }
                  onChange={(event, newValue) => {
                    setValue('city', newValue ? newValue.value : null, {
                      shouldValidate: true,
                    });
                  }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label='City'
                      InputProps={{
                        ...params.InputProps,
                        type: 'search',
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='address'
                  type='text'
                  label='Address*'
                  placeholder='Enter Address'
                  fullWidth
                  required
                />
              </Grid>

              <Grid item md={6} sm={12}>
                <RHFTextField
                  size='small'
                  name='pincode'
                  type='number'
                  label='Pin code*'
                  placeholder='Enter Pin code'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6}>
                <RHFTextField
                  size='small'
                  name='password'
                  type={showPass ? 'text' : 'password'}
                  label='Password*'
                  placeholder='Enter Password'
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={() => setShowPass(!showPass)}
                          edge='end'
                          className='text-white'
                        >
                          {showPass ? (
                            <VisibilityOff className='text-white' />
                          ) : (
                            <Visibility className='text-white' />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6}>
                <RHFTextField
                  size='small'
                  name='confirmPassword'
                  type={showConfirmPass ? 'text' : 'password'}
                  label='Confirm Password*'
                  placeholder='Enter Confirm Password'
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={() => setShowConfirmPass(!showConfirmPass)}
                          edge='end'
                          className='text-white'
                        >
                          {showConfirmPass ? (
                            <VisibilityOff className='text-white' />
                          ) : (
                            <Visibility className='text-white' />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div className='flex mt-3 justify-end'>
            <Button type='submit' sx={{ background: 'white' }}>
              {' '}
              <IoIosAddCircleOutline size={19} /> Add Student
            </Button>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default AddStudent;
