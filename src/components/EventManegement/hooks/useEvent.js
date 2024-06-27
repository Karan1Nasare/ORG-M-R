import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AnouncementImage from '../../../assets/announcement_card.png';
import useFetcher from '../../../hooks/useFetcher';
import axiosInstance from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const useEvent = () => {
  const { fetcher, getExecutorState } = useFetcher();
  const [event, setEvent] = useState();

  const getEvents = async () => {
    return axiosInstance.get(URLS.EVENTS);
  };

  const addEvent = async data => {
    return axiosInstance.post(URLS.EVENTS, data);
  };

  const [loading, setLoading] = useState(false);

  // add event
  const onAddEvent = useCallback(async data => {
    try {
      fetcher({
        key: 'add-event',
        executer: () => addEvent(data),
        onSuccess: response => {
          console.log('rresponse: ', response);
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  const fetchEventList = async () => {
    try {
      setLoading(true);
      fetcher({
        key: 'event',
        executer: () => getEvents(),
        onSuccess: response => {
          console.log('event rresponse feature: ', response);
          setEvent(response.data?.data);
        },
      });
      setLoading(false);
    } catch (err) {
      console.log('error while fetching questions', err);
    }
  };

  useEffect(() => {
    fetchEventList();
  }, []);

  return {
    loading,
    event,
    onAddEvent,
  };
};

export default useEvent;
