/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Password } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AuthButtonBg from '../../../../assets/auth/buttonBg.svg';
import { APIClient } from '../../../../utilities/axios-client';
import URLS from '../../../../constants/api';
import { useStore } from '../../../../store/context-store';
import { getRouteByName } from '../../../../App.routes';
import useFetcher from '../../../../hooks/useFetcher';
import { login } from '../../../../services/auth';

const LoginForm = () => {
  const { API } = APIClient();
  const { fetcher, getExecutorState } = useFetcher();
  const [Store, StoreDispatch] = useStore();
  const [responseErr, setResponseErr] = useState('');
  const navigate = useNavigate();
  const loginSchema = object({
    username: string()
      .required('username should not be empty')
      // .username()
      .typeError('Please enter a valid username address'),
    password: string().required('Password should not be empty'),
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onLoginHandler = async data => {
    fetcher({
      key: 'login',
      executer: () => login(data),
      onSuccess: response => {
        StoreDispatch({ type: 'Login', user: response.data.data });
      },
      onSuccessRoute: getRouteByName('dashboard')?.route || '/',
    });
    // try {
    //   const response = await API('POST', URLS.LOGIN, data, false);
    //   console.log('response', response);
    //   if (response.status !== 200) {
    //     throw response;
    //   }
    //   StoreDispatch({ type: 'Login', user: response.data.data });
    //   navigate(getRouteByName('dashboard')?.route || '/');
    //   console.log(response);
    // } catch (err) {
    //   setResponseErr(err?.response?.data?.message || err);
    //   console.log('error: ', err);
    // }
  };
  const { isLoading } = getExecutorState('login');
  return (
    <div className='text-white w-[40%] lg:ml-64'>
      <form onSubmit={handleSubmit(onLoginHandler)}>
        <Typography variant='title' className='text-start block mb-10'>
          Login to Continue
        </Typography>
        <div className='text-start mt-6 mb-6'>
          <div className='lg:mb-6'>
            <TextField
              placeholder='UserName (Required)'
              label=''
              className='underline-border w-full'
              variant='standard'
              {...register('username')}
            />
          </div>
          <div>
            <TextField
              name='password'
              id='password'
              placeholder='Password (Required)'
              label=''
              className='underline-border w-full'
              variant='standard'
              {...register('password')}
            />
          </div>
        </div>
        <p>{errors?.username?.message}</p>
        <p>{errors?.password?.message}</p>
        <div className='authButton mt-10'>
          <img src={AuthButtonBg} alt='button' />
          <Button variant='outline-primary' type='submit' disabled={isLoading}>
            Log In
          </Button>
        </div>
        {responseErr && (
          <Typography variant='h6' sx={{ mt: 10 }}>
            {responseErr}
          </Typography>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
