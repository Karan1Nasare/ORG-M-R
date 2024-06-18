import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { APIClient } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const useAddNotification = () => {
  const { API } = APIClient();
  const navigate = useNavigate();
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [newNotification, setNewNotification] = useState({
    title: '',
    description: '',
    image: selectedFile,
  });

  useEffect(() => {
    setNewNotification(prevFeature => ({
      ...prevFeature,
      image: selectedFile,
    }));
  }, [selectedFile]);

  const AddNotification = useCallback(async feature => {
    try {
      const data = { ...feature };
      const response = await API('POST', URLS.ADD_NOTIFICATION(), data);
      navigate('/notifications');
    } catch (err) {
      console.error('Error while adding notification', err);
    }
  }, []);

  const onNotificationChange = (name, value) => {
    setNewNotification(prevFeature => ({
      ...prevFeature,
      [name]: value,
    }));
  };

  const handleAddNotification = () => {
    AddNotification(newNotification);
  };

  const handleOpenDeleteDialog = () => {
    setIsOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsOpenDeleteDialog(false);
  };

  return {
    newNotification,
    isOpenDeleteDialog,
    selectedFile,
    setSelectedFile,
    handleAddNotification,
    handleOpenDeleteDialog,
    handleCloseDeleteDialog,
    onNotificationChange,
  };
};

export default useAddNotification;
