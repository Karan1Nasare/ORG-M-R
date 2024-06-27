import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../../../utilities/axios-client';
import URLS from '../../../../constants/api';
import useFetcher from '../../../../hooks/useFetcher';

const useEditStaff = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetcher, getExecutorState } = useFetcher();

  const [staffDataById, setStaffDataById] = useState();

  const editStaff = async (staffId, data) => {
    return axiosInstance.post(URLS.UPDATE_STAFF(staffId), data);
  };

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

  // edit staff
  const onEditStaff = useCallback(async staff => {
    console.log('🚀 ~ AddStaff ~ staff:', staff);
    try {
      fetcher({
        key: 'add-staff',
        executer: () => editStaff(staff),
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
    onEditStaff,
  };
};

export default useEditStaff;
