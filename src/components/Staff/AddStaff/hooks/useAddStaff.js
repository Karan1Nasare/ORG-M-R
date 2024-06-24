import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../../utilities/axios-client';
import URLS from '../../../../constants/api';
import useFetcher from '../../../../hooks/useFetcher';

const useAddStaff = () => {
  const navigate = useNavigate();
  const { fetcher, getExecutorState } = useFetcher();

  const addStaff = async data => {
    return axiosInstance.post(URLS.ADD_STAFF(), data);
  };

  // add staff
  const onAddStaff = useCallback(async staff => {
    console.log('🚀 ~ AddStaff ~ staff:', staff);
    try {
      fetcher({
        key: 'add-staff',
        executer: () => addStaff(staff),
        onSuccess: response => {
          console.log('rresponse: ', response);
          navigate('/staff');
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  return {
    onAddStaff,
  };
};

export default useAddStaff;
