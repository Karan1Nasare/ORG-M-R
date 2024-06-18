import URLS from '../../constants/api';
import axiosInstance from '../../utilities/axios-client';

export const login = async data => {
  return axiosInstance.post(URLS.LOGIN, {
    password: data.password,
    username: data.username,
  });
};
export const TEST = '';
