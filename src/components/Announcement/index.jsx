import React from 'react';
import { Typography, Pagination } from '@mui/material';

import AnnouncementHeader from './components/header';
import useAnnouncements from './hooks/useAnnouncement';
import AnnouncementCard from './components/cards';
import colors from '../../theme/colors';
import Loader from '../shared/Loader';

const Announcement = () => {
  const {
    announcementList,
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
    confirmUpdateHandler,
    totalPages,
    loading,
  } = useAnnouncements();

  let content;

  if (loading) {
    content = <Loader />;
  } else if (announcementList.length > 0) {
    content = (
      <>
        <div className='grid lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1'>
          {announcementList.map((announcement, index) => (
            <AnnouncementCard
              key={index}
              data={announcement}
              isPreviewOpen={isPreviewOpen}
              isEditOpen={isEditOpen}
              openDelete={openDelete}
              selectedData={selectedData}
              openEditDialog={openEditDialog}
              closeEditDialog={closeEditDialog}
              openPreviewDialog={openPreviewDialog}
              closePreviewDialog={closePreviewDialog}
              confirmDeleteHandler={confirmDeleteHandler}
              confirmUpdateHandler={confirmUpdateHandler}
              handleCloseDelete={handleCloseDelete}
              openDeleteDialog={openDeleteDialog}
            />
          ))}
        </div>
        <div className='flex justify-center mt-3'>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color='primary'
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'rgba(125, 143, 179, 1)',
                '&.Mui-selected': {
                  color: 'white',
                  backgroundColor: colors.secondary__fill__dark,
                },
              },
              '& .MuiPaginationItem-previousNext': {
                backgroundColor: colors.white,
                color: colors.black,
              },
            }}
          />
        </div>
      </>
    );
  } else {
    content = <p className='text-white'>No announcements found.</p>;
  }

  return (
    <>
      <div className='h-full flex flex-col'>
        <Typography
          className='flex align-items-start'
          variant='mainLayoutTitle'
        >
          Announcement
        </Typography>
        <AnnouncementHeader value={{}} onChange={{}} />
        <div className='flex-1 mt-2'>{content}</div>
      </div>
    </>
  );
};

export default Announcement;
