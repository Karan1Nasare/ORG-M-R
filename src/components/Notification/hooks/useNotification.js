import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APIClient } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const ITEMS_PER_PAGE = 4;

const useNotification = () => {
  const { API } = APIClient();

  const navigate = useNavigate();

  const [notificationList, setNotificationList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const DeleteNotification = useCallback(async id => {
    try {
      const response = await API(
        'DELETE',
        URLS.DELETE_NOTIFICATION(id),

        true,
      );
      navigate('/notifications');
    } catch (err) {
      console.error('Error while adding notification', err);
    }
  }, []);

  const UpdateNotification = useCallback(async (id, notification) => {
    try {
      const data = { ...notification };
      const response = await API(
        'POST',
        URLS.EDIT_NOTIFICATION(id),
        data,
        true,
      );
      navigate('/notifications');
    } catch (err) {
      console.error('Error while adding notification', err);
    }
  }, []);

  const handleUpdateNotification = (id, notification) => {
    UpdateNotification(id, notification);
  };

  // Fetch initial data
  const fetchNotificationList = async () => {
    // Simulated data fetching
    // const record = Array.from({ length: 50 }, (_, index) => ({
    //   title: `Admin ${index}`,
    //   id: index + 1,
    // }));
    // setNotificationList(record);

    try {
      const userType = 'Admin';
      const response = await API(
        'GET',
        URLS.GET_NOTIFICATIION(userType),
        {},
        true,
      );
      if (response.status !== 200) {
        throw response;
      }
      console.log('response', response);
      setNotificationList(response.data?.data);
    } catch (err) {
      console.log('error while fetching questions', err);
    }
  };

  useEffect(() => {
    try {
      fetchNotificationList();
    } catch (error) {
      console.log('error while fetching notifications', error);
    }
  }, []);

  // Calculate filtered items based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredData([]);
      setCurrentPage(1); // Reset page number when clearing search
      return;
    }

    const filteredItems = notificationList.filter(notification =>
      notification?.title?.toLowerCase().includes(searchTerm?.toLowerCase()),
    );

    setFilteredData(filteredItems);
    setCurrentPage(1); // Reset page number when performing a search
  }, [searchTerm, notificationList]);

  // Determine current items based on search results or pagination
  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentItems = searchTerm
    ? filteredData.slice(firstCardIndex, lastCardIndex)
    : notificationList.slice(firstCardIndex, lastCardIndex);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const openEditDialog = () => setIsEditOpen(true);
  const closeEditDialog = () => setIsEditOpen(false);
  const confirmDeleteHandler = () => setOpenDelete(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const openDeleteDialog = () => setOpenDelete(true);
  const handleAddNotification = () => navigate('/addNotification');

  return {
    data: currentItems,
    isEditOpen,
    openDelete,
    searchTerm,
    totalShowItems: notificationList?.length,
    currentPage,
    ITEMS_PER_PAGE,
    setCurrentPage,
    handleSearchChange,
    openEditDialog,
    closeEditDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
    handleAddNotification,
    handleUpdateNotification,
  };
};

export default useNotification;
