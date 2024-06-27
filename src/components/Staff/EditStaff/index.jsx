import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import EditStaff from './EditStaff';
import useEditStaff from './hooks/useEditStaff';
import axiosInstance from '../../../utilities/axios-client';
import URLS from '../../../constants/api';
import useFetcher from '../../../hooks/useFetcher';

const Index = () => {
  const { id } = useParams();
  const { fetcher, getExecutorState } = useFetcher();
  const [staffDataById, setStaffDataById] = useState();

  const getStaffById = async staffId => {
    return axiosInstance.get(URLS.GET_STAFF_By_Id(staffId));
  };

  const fetchStaffById = async staffId => {
    try {
      fetcher({
        key: 'staff',
        executer: () => getStaffById(staffId),
        onSuccess: response => {
          console.log('iddddd rresponse feature: ', response);
          setStaffDataById(response.data?.data);
        },
      });
    } catch (err) {
      console.log('error while fetching questions', err);
    }
  };

  useEffect(() => {
    if (id) {
      fetchStaffById(id);
    }
  }, []);

  return (
    <div>
      <EditStaff staffDataById={staffDataById} />
    </div>
  );
};

export default Index;
