import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AnouncementImage from '../../../assets/announcement_card.png';
import useFetcher from '../../../hooks/useFetcher';
import { APIClient2 } from '../../../utilities/axios-client';
import StaffServices from '../services/services';

const ITEMS_PER_PAGE = 6;

const useStaff = () => {
  const navigate = useNavigate();
  const { getStaff, deleteStaffById, editStaffById } = StaffServices();
  const { fetcher, getExecutorState } = useFetcher();
  const { axiosInstance } = APIClient2();

  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const openEditDialog = data => {
    setIsEditOpen(true);
    setSelectedData(data);
  };

  const closeEditDialog = () => {
    setIsEditOpen(false);
  };

  const openPreviewDialog = data => {
    setIsPreviewOpen(true);
    setSelectedData(data);
  };

  const closePreviewDialog = () => {
    setIsPreviewOpen(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const openDeleteDialog = data => {
    setOpenDelete(true);
    setSelectedData(data);
  };

  const onDeleteStaff = id => {
    try {
      fetcher({
        key: 'deleteAnnouncements',
        executer: () => deleteStaffById(id),
        onSuccess: response => {
          console.log('delete rresponse feature: ', response);
          navigate('/staff');
        },
      });
    } catch (err) {
      console.log('error while fetching questions', err);
    }
  };

  const onUpdateStaff = (id, data) => {
    try {
      fetcher({
        key: 'deleteStaff',
        executer: () => editStaffById(id, data),
        onSuccess: response => {
          console.log('edit rresponse feature: ', response);
        },
      });
    } catch (err) {
      console.log('error while fetching questions', err);
    }
  };

  const confirmUpdateHandler = data => {
    if (selectedData) {
      onUpdateStaff(selectedData.id, data);
    }
    setOpenDelete(false);
  };

  const confirmDeleteHandler = () => {
    if (selectedData) {
      onDeleteStaff(selectedData.id);
    }
    setOpenDelete(false);
  };

  const fetchStaffList = async () => {
    try {
      setLoading(true);
      fetcher({
        key: 'staff',
        executer: () => getStaff(),
        onSuccess: response => {
          console.log('feature rresponse feature: ', response);
          setStaffList(response.data?.data);
          setLoading(false);
        },
      });
    } catch (err) {
      console.log('error while fetching questions', err);
    }
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    fetchStaffList();
  }, []);

  //   const paginatedAnnouncements = useMemo(() => {
  //     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  //     const endIndex = startIndex + ITEMS_PER_PAGE;
  //     return staffList.slice(startIndex, endIndex);
  //   }, [staffList, currentPage]);

  return {
    loading,
    staffList,
    isPreviewOpen,
    isEditOpen,
    openDelete,
    selectedData,
    openEditDialog,
    closeEditDialog,
    openPreviewDialog,
    closePreviewDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
    currentPage,
    handlePageChange,
    totalPages: Math.ceil(staffList.length / ITEMS_PER_PAGE),
    confirmUpdateHandler,
  };
};

export default useStaff;
