import URLS from '../../../constants/api';
import axiosInstance from '../../../utilities/axios-client';

const StaffServices = () => {
  const editStaffById = async (id, data) => {
    return axiosInstance.post(URLS.UPDATE_STAFF(id), data);
  };

  const getStaff = async () => {
    return axiosInstance.get(URLS.GET_STAFF());
  };

  const deleteStaffById = async id => {
    return axiosInstance.delete(URLS.DELETE_STAFF(id));
  };

  return {
    getStaff,
    deleteStaffById,
    editStaffById,
  };
};

export default StaffServices;
