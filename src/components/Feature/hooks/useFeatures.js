import React, { useCallback, useEffect, useState } from 'react';
import AnouncementImage from '../../../assets/announcement_card.png';
import { APIClient } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const ITEMS_PER_PAGE = 6;

const useFeatures = () => {
  const [featureList, setFeatureList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  const { API } = APIClient();

  const openEditDialog = () => {
    setIsEditOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditOpen(false);
  };

  const openPreviewDialog = () => {
    setIsPreviewOpen(true);
  };

  const closePreviewDialog = () => {
    setIsPreviewOpen(false);
  };

  const confirmDeleteHandler = () => {
    setOpenDelete(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const openDeleteDialog = () => {
    setOpenDelete(true);
  };

  // Calculate filtered items based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredData([]);
      setCurrentPage(1); // Reset page number when clearing search
      return;
    }

    const filteredItems = featureList.filter(notification =>
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredData(filteredItems);
  }, [searchTerm, featureList]);

  // Determine current items based on search results or pagination
  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentItems = searchTerm
    ? filteredData.slice(firstCardIndex, lastCardIndex)
    : featureList.slice(firstCardIndex, lastCardIndex);

  // Calculate total pages based on original data
  const totalPages = Math.ceil(featureList.length / ITEMS_PER_PAGE);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };
  console.log('current page:', currentPage);
  const [error, setError] = useState(null);

  const AddFeature = useCallback(async newFeature => {
    try {
      const data = { ...newFeature };
      const response = await API('POST', URLS.ADD_FEATURE, data);

      if (response.data && response.data.code === 200) {
        setFeatureList(prevFeatures => [
          ...prevFeatures,
          response.data.feature,
        ]);
      } else {
        setError('Failed to add feature');
      }
    } catch (err) {
      console.error('Error while adding feature', err);
      setError('Error adding feature');
    }
  }, []);

  const fetchFeatureList = async () => {
    // const data = Array.from({ length: 50 }, (_, index) => ({
    //   title: `Feature ${index}`,
    //   descriptionTitle: 'Total Amount:',
    //   descriptionMetaData: '600',
    //   image: AnouncementImage,
    //   id: index + 1,
    // }));

    // setFeatureList(data);

    try {
      const response = await API('GET', URLS.GET_FEATURES(), {}, true);
      console.log('🚀 ~ fetchFeatureList ~ response:', response);
      if (response.status !== 200) {
        throw response;
      }
      console.log('response', response);
      setFeatureList(response.data?.data);
    } catch (err) {
      console.log('error while fetching questions', err);
    }
  };

  useEffect(() => {
    try {
      console.log('getting features');
      fetchFeatureList();
    } catch (err) {
      console.log('err while fetching notifications', err);
    }
  }, []);

  return {
    data: currentItems,
    isPreviewOpen,
    isEditOpen,
    openDelete,
    searchTerm,
    totalShowItems: featureList?.length,
    currentPage,
    totalPages,
    ITEMS_PER_PAGE,
    setCurrentPage,
    handleSearchChange,
    openEditDialog,
    closeEditDialog,
    openPreviewDialog,
    closePreviewDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
    featureList,
    error,
    AddFeature,
  };
};

export default useFeatures;
