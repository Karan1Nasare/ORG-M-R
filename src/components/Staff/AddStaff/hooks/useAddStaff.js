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

  const getStates = async () => {
    return axiosInstance.get(URLS.GET_STATES);
  };

  const getAllCities = async params => {
    return axiosInstance.get(URLS.GET_CITIES, { params });
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
    getAllCities,
    getStates,
    getExecutorState,
  };
};

export default useAddStaff;
