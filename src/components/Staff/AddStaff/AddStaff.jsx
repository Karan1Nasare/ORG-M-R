/*   import/no-extraneous-dependencies */

import React, { useEffect, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import AddStaffForm from './AddStaffForm';
import {
  FormProvider,
  RHFMultiSelect,
  RHFSelect,
  RHFTextField,
} from '../../../hooks/hook-form';
import Button from '../../shared/buttons/Button';
import back from '../../icon/back.svg';
import TabTitle from '../../shared/TabTitle';
import useAddStaff from './hooks/useAddStaff';
import useFetcher from '../../../hooks/useFetcher';
import useSubject from '../../Material/hooks/useSubject';
import useCourseStd from '../../Material/hooks/useCourseStd';

const AddStaff = ({ setValue }) => {
  const { staffState } = useLocation();
  const navigate = useNavigate();
  const { fetcher } = useFetcher();
  const { onAddStaff, getAllCities, getStates } = useAddStaff();
  const { fetchSubjectList, subjectList } = useSubject();
  const { courseStdList } = useCourseStd();
  const [file, setFile] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [states, setState] = useState([]);
  const [cities, setCities] = useState([]);

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
    watch,
    formState: { errors },
  } = methods;

  const values = watch();

  const onSubmit = async data => {
    const formData = new FormData();

    const multiSelectFields = ['organisation', 'class', 'primary_class'];
    multiSelectFields.forEach(field => {
      data[field]?.forEach((item, index) => {
        formData.append(`${field}[${index}]`, item?.value || item);
      });
    });

    Object.entries(data).forEach(([key, value]) => {
      if (!multiSelectFields.includes(key)) {
        formData.append(key, value);
      }
    });

    if (file && file[0]) {
      formData.append('image', file[0]);
    }
    formData.append('subject_id', '1');

    onAddStaff(formData);
  };

  const handleBackClick = () => {
    navigate('/staff');
  };

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ staffState:', staffState);

    if (staffState && staffState?.staff_id) {
      console.log('111111111staff_id', staffState.staff_id);
    }
  }, []);

  useEffect(() => {
    setCities([]);
    if (values?.state) {
      fetcher({
        key: 'get_city',
        executer: () => getAllCities({ state_id: values?.state }),
        onSuccess: res => {
          setCities(res?.data?.data);
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
      },
      showSuccessToast: false,
    });
  }, []);

  useEffect(() => {
    (async () => {
      console.log(
        'values?.standard?.value',
        values?.standard,
        values?.standard?.value,
      );
      if (values?.standard) {
        await fetchSubjectList(values?.standard);
        console.log('subject list', subjectList);
      }
    })();
  }, [values?.standard]);

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between'>
          <TabTitle title='Add Staff ' sx={{ marginTop: '20px' }} />
          <div
            onClick={handleBackClick}
            className='flex items-center mt-4 cursor-pointer'
          >
            <img src={back} alt='' className='text-white w-8 h-8 mr-1' />
            <button className='text-white text-2xl'>Back</button>
          </div>
        </div>

        <div className='mt-3'>
          <AddStaffForm file={file} setFile={setFile} />
          <div className='text-sm w-full mt-5 font-medium border border-gray-700 text-center bg-[#0B1739] text-gray-500 p-6 rounded-xl flex items-center justify-between'>
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
                    { label: 'Organization 1', value: '1' },
                    { label: 'Organization 2', value: '2' },
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
                    { label: 'Class 1', value: '1' },
                    { label: 'Class 2', value: '2' },
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
                    { label: 'Primay Class 1', value: '1' },
                    { label: 'Primay Class 2', value: '2' },
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
                  htmlFor='standard'
                  className='block text-sm text-white text-start mb-2'
                >
                  Standard
                </label>
                <RHFSelect
                  size='small'
                  name='standard'
                  placeholder='Selected Standard'
                  options={courseStdList?.map(standard => ({
                    label: standard?.name,
                    value: standard?.id,
                  }))}
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
                <RHFSelect
                  size='small'
                  name='subject'
                  placeholder='Selected Subject'
                  options={subjectList?.map(subject => ({
                    label: subject?.name,
                    value: subject?.id,
                  }))}
                  fullWidth
                  required
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
                <label
                  htmlFor='state'
                  className='block text-sm text-white text-start mb-2'
                >
                  State
                </label>
                <RHFSelect
                  size='small'
                  name='state'
                  placeholder='Enter State'
                  options={states?.map(state => ({
                    label: state?.name,
                    value: state?.id,
                  }))}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <label
                  htmlFor='standard'
                  className='block text-sm text-white text-start mb-2'
                >
                  City
                </label>
                <RHFSelect
                  size='small'
                  name='city'
                  placeholder='Enter City'
                  options={cities.map(city => ({
                    label: city.name,
                    value: city.id,
                  }))}
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
              <button type='submit'>Add Staff</button>
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default AddStaff;
