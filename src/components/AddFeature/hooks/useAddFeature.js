import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { APIClient } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const useAddFeatures = () => {
  const { API } = APIClient();
  const navigate = useNavigate();
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [newFeature, setNewFeature] = useState({
    name: '',
    gst: '',
    description: '',
    rate: '',
    totalAmount: '',
    image: selectedFile,
  });

  useEffect(() => {
    setNewFeature(prevFeature => ({
      ...prevFeature,
      image: selectedFile,
    }));
  }, [selectedFile]);

  const AddFeature = useCallback(async feature => {
    try {
      const data = { ...feature };
      const response = await API('POST', URLS.ADD_FEATURE(), data);
      navigate('/features');
    } catch (err) {
      console.error('Error while adding feature', err);
    }
  }, []);

  const onFeatureChange = (name, value) => {
    setNewFeature(prevFeature => ({
      ...prevFeature,
      [name]: value,
    }));
  };

  const handleAddFeature = () => {
    AddFeature(newFeature);
  };

  const handleOpenDeleteDialog = () => {
    setIsOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsOpenDeleteDialog(false);
  };

  return {
    newFeature,
    isOpenDeleteDialog,
    selectedFile,
    setSelectedFile,
    handleAddFeature,
    handleOpenDeleteDialog,
    handleCloseDeleteDialog,
    onFeatureChange,
  };
};

export default useAddFeatures;
