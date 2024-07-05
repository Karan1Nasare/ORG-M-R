import axios from 'axios';
import URLS from '../../constants/api';
import axiosInstance from '../../utilities/axios-client';

export const addNewStudent = async data => {
  if (!data || typeof data !== 'object' || !Object.keys(data).length) {
    throw new Error('Invalid data: Data is required and cannot be empty');
  }

  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });

  return axiosInstance.post(URLS.ADD_STUDENT, formData);
};

export const updateAdminStudentCount = async data => {
  return axiosInstance.post(URLS.UPDATE_STUDENT_COUNT(data.id), data);
};

export const addAdminPlan = async data => {
  return axiosInstance.post(URLS.ADD_ADMIN_PLAN(data.id), data);
};

export const addAdminFeature = async data => {
  return axiosInstance.post(URLS.ADD_ADMIN_FEATURES(data.id), data);
};

export const getStates = async () => {
  return axiosInstance.get(URLS.GET_STATES);
};

export const makePayments = async data => {
  return axiosInstance.post(URLS.MAKE_PAYMENT(), data);
};

export const getAllStudent = async params => {
  return axiosInstance.get(URLS.GET_STUDENT, { params });
};

export const getAllCities = async params => {
  return axiosInstance.get(URLS.GET_CITIES, { params });
};

export const getAllCourses = async params => {
  return axiosInstance.get(URLS.GET_ALL_COURSES);
};

export const deleteAdminData = async id => {
  return axiosInstance.delete(URLS.DELETE_ADMIN(id));
};

export const addMultipletudent = async data => {
  if (!data || typeof data !== 'object' || !Object.keys(data).length) {
    throw new Error('Invalid data: Data is required and cannot be empty');
  }
  const formData = new FormData();
  formData.append('file', data);
  return axiosInstance.post(URLS.IMPORT_STUDENT, formData);
};
