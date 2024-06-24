import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AnouncementImage from '../../../assets/announcement_card.png';
import useFetcher from '../../../hooks/useFetcher';
import { APIClient2 } from '../../../utilities/axios-client';
import AnnouncementServices from '../services/services';

const ITEMS_PER_PAGE = 6;

const useAnnouncements = () => {
  const { getAnnouncement, deleteAnnouncementById, editAnnouncementById } =
    AnnouncementServices();
  const { fetcher, getExecutorState } = useFetcher();
  const { axiosInstance } = APIClient2();

  const [announcementList, setAnnouncementList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = value => {
    setSearchTerm(value);
  };

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

  const onDeleteAnnouncement = id => {
    try {
      fetcher({
        key: 'deleteAnnouncements',
        executer: () => deleteAnnouncementById(id),
        onSuccess: response => {
          console.log('delete rresponse feature: ', response);
          getAnnouncement();
        },
      });
    } catch (err) {
      console.log('error while fetching questions', err);
    }
  };

  const onUpdateAnnouncement = (id, data) => {
    try {
      fetcher({
        key: 'deleteAnnouncements',
        executer: () => editAnnouncementById(id, data),
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
      onUpdateAnnouncement(selectedData.id, data);
    }
    setOpenDelete(false);
  };

  const confirmDeleteHandler = () => {
    if (selectedData) {
      onDeleteAnnouncement(selectedData.id);
    }
    setOpenDelete(false);
  };

  const fetchAnnouncementList = async () => {
    try {
      setLoading(true);
      fetcher({
        key: 'announcements',
        executer: () => getAnnouncement(),
        onSuccess: response => {
          console.log('feature rresponse feature: ', response);
          setAnnouncementList(response.data?.data);
        },
      });
      setLoading(false);
    } catch (err) {
      console.log('error while fetching questions', err);
    }
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    fetchAnnouncementList();
  }, []);

  const paginatedAnnouncements = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return announcementList.slice(startIndex, endIndex);
  }, [announcementList, currentPage]);

  return {
    loading,
    announcementList: paginatedAnnouncements,
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
    totalPages: Math.ceil(announcementList.length / ITEMS_PER_PAGE),
    confirmUpdateHandler,
    searchTerm,
    setSearchTerm,
    handleSearchChange,
  };
};

export default useAnnouncements;
