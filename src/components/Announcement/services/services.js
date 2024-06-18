import URLS from '../../../constants/api';
import axiosInstance from '../../../utilities/axios-client';

const AnnouncementServices = () => {
  const editAnnouncementById = async (id, data) => {
    return axiosInstance.post(URLS.EDIT_ANNOUNCEMENT(id), data);
  };

  const getAnnouncement = async () => {
    return axiosInstance.get(URLS.GET_ANNOUNCEMENT());
  };

  const deleteAnnouncementById = async id => {
    return axiosInstance.delete(URLS.DELETE_ANNOUNCEMENT(id));
  };

  return {
    getAnnouncement,
    deleteAnnouncementById,
    editAnnouncementById,
  };
};

export default AnnouncementServices;
