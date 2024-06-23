import { APIClient } from '../../utilities/axios-client';

export const getAllExams = async data => {
  return APIClient().API('GET', `/exams?search=${data}`, null, true);
};

export const createExam = async data => {
  return APIClient().API('POST', '/exams', data, true);
};

export const examDetail = async id => {
  return APIClient().API('GET', `/exams/${id}`, null, true);
};

export const examDelete = async id => {
  return APIClient().API('DELETE', `/exams/${id}`, null, true);
};

export const getCoursesList = async query => {
  return APIClient().API('GET', `getallcoursedata${query}`, null, true);
};
