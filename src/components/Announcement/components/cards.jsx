import React from 'react';
import { Icon } from '@iconify/react';

import AnnouncementImage from '../../../assets/announcement_card.png';
import PreviewDialog from '../../shared/Dialog/previewDialog';
import EditAnnouncementCard from '../../shared/Dialog/FeatureDialog/editDialog';
import ConfirmDelete from '../../ui/Dialog/ConfirmDelete';

const AnnouncementCard = ({
  data,
  isPreviewOpen,
  isEditOpen,
  openDelete,
  openEditDialog,
  closeEditDialog,
  openPreviewDialog,
  closePreviewDialog,
  confirmDeleteHandler,
  handleCloseDelete,
  openDeleteDialog,
  selectedData,
  confirmUpdateHandler,
}) => {
  console.log('🚀 ~ AnnouncementCard ~ data:', data);
  return (
    <div className='relative bg-secondary__fill h-68 w-34 mt-4 p-8 rounded-lg border border-grey__primary__light border-opacity-20'>
      <img
        src={data?.image?.url || AnnouncementImage}
        className='w-full h-52 rounded-xl mb-4 object-cover'
        alt='Announcement Image'
      />
      <div className='flex items-center justify-between mt-4'>
        <div className='flex items-start flex-col w-full'>
          <div className='text-white font-normal text-md'>
            {data?.title || 'Diwali'}
          </div>
          <div className='flex justify-between w-full'>
            <div className='flex items-center w-full mt-2'>
              <div className='text-grey__primary__light text-sm'>
                {data?.type || 'Student'}
              </div>
              {data?.type === 'Student' && (
                <div className='text-xs rounded-xl border w-16 truncate text-success border-none bg-success bg-opacity-50 px-1 py1 ml-3 font-semibold'>
                  {data?.standard || '100'}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='text-white flex'>
          <Icon
            icon={'mdi:eye'}
            className='text-white h-5 w-5 mr-4 cursor-pointer'
            width={25}
            onClick={() => openPreviewDialog(data)}
          />
          <Icon
            icon={'lucide:edit'}
            className='text-white h-5 w-5 mr-4'
            onClick={() => openEditDialog(data)}
          />
          <Icon
            icon={'material-symbols:delete'}
            className='text-danger h-5 w-5'
            onClick={() => openDeleteDialog(data)}
          />
        </div>
      </div>
      <PreviewDialog
        isOpen={isPreviewOpen}
        onClose={closePreviewDialog}
        heading='Announcement'
        data={selectedData}
      />
      <EditAnnouncementCard
        isOpen={isEditOpen}
        onClose={closeEditDialog}
        heading='Edit Announcement'
        announcementData={selectedData}
        onUpdate={confirmUpdateHandler}
      />
      <ConfirmDelete
        fullMessage={'Are you sure want to Delete Announcement ?'}
        title={'Delete Anoouncement'}
        handleClose={handleCloseDelete}
        deleteHandler={confirmDeleteHandler}
        open={openDelete}
      />
    </div>
  );
};

export default AnnouncementCard;
