import React, { useEffect, useState } from 'react';
import useFetcher from '../../../../hooks/useFetcher';
import { APIClient2 } from '../../../../utilities/axios-client';
import URLS from '../../../../constants/api';

const useExamPaper = () => {
  const { axiosInstance } = APIClient2();

  const { fetcher, getExecutorState } = useFetcher();
  const [examPaper, setExamPaper] = useState();

  const getExamPaper = async () => {
    return axiosInstance.get(URLS.GET_EXAM_PAPER);
  };

  const fetchData = async () => {
    fetcher({
      key: 'get-exam-paper',
      showSuccessToast: false,
      executer: () => getExamPaper(),
      onSuccess: response => {
        const record = response?.data?.data;
        setExamPaper(record);
      },
    });
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log('error while fetching examPaper', error);
    }
  }, []);

  return { examPaper };
};

export default useExamPaper;
