import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetcher from '../../../hooks/useFetcher';
import axiosInstance from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const useAddAnnouncement = () => {
  const navigate = useNavigate();
  const { fetcher, getExecutorState } = useFetcher();

  const [eventList, setEventList] = useState();

  const addAnnouncement = async data => {
    return axiosInstance.post(URLS.ADD_ANNOUNCEMENT(), data);
  };

  const getEvent = async () => {
    return axiosInstance.get(URLS.GET_EVENT());
  };

  const fetchEventList = async () => {
    try {
      fetcher({
        key: 'event',
        executer: () => getEvent(),
        onSuccess: response => {
          console.log('event rresponse event: ', response);
          setEventList(response.data?.data);
        },
      });
    } catch (err) {
      console.log('error while fetching questions', err);
    }
  };

  // add Announcement
  const onAddAnnouncement = useCallback(async announcement => {
    try {
      fetcher({
        key: 'add-Announcement',
        executer: () => addAnnouncement(announcement),
        onSuccess: response => {
          console.log('rresponse: ', response);
          navigate('/announcements');
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  // useEffect(() => {
  //   fetchEventList();
  // }, []);

  return {
    onAddAnnouncement,
    eventList,
  };
};

export default useAddAnnouncement;
