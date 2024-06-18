const URLS = {
  HOST_URL: 'https://superadmin.mandreducation.in',
  SUFFIX_URL: '/api/v1',
  LOGIN: `/login`,
  LOG_OUT: `/logout`,
  GET_PROFILE: '/profile',
  UPDATE_PROFILE: '/profile/update',
  CHANGE_PASSWORD: '/change-password',
  FORGOT_PASSWORD: '/password/email',
  RESET_PASSWORD: token => `/password/reset?token=${token}`,
  DASHBOARD: () => `/dashboard`,
  ADD_PLAN: () => `/plans`,
  GET_PLAN: () => `/plans`,
  EDIT_PLAN: id => `/plans/${id}`,
  UPDATE_PLAN: id => `/plans/${id}`,
  DELETE_PLAN: id => `/plans/${id}`,
  ADD_ADMIN: () => `/admins`,
  GET_ADMINS: () => `/admins`,
  EDIT_ADMIN: id => `/admins/${id}`,
  UPDATE_ADMIN: id => `/admins/${id}`,
  DELETE_ADMIN: id => `/admins/${id}`,
  ADD_FEATURE: () => `/features`,
  GET_FEATURES: () => `/features`,
  EDIT_FEATURE: id => `/features/${id}`,
  UPDATE_FEATURE: id => `/features/${id}`,
  DELETE_FEATURE: id => `/features/${id}`,
  ADD_QUESTION_BANK: () => `/questionbanks`,
  GET_QUESTION_BANK: () => `/questionbanks`,
  EDIT_QUESTION_BANK: id => `/questionbanks/${id}`,
  UPDATE_QUESTION_BANK: id => `/questionbanks/${id}`,
  DELETE_QUESTION_BANK: id => `/questionbanks/${id}`,
  ADD_COURSE: () => `/courses`,
  GET_COURSE: () => `/courses`,
  EDIT_COURSE: id => `/courses/${id}`,
  UPDATE_COURSE: id => `/courses/${id}`,
  DELETE_COURSE: id => `/courses/${id}`,
  ADD_SUBJECT: () => `/subjects`,
  GET_SUBJECT: () => `/subjects`,
  EDIT_SUBJECT: id => `/subjects/${id}`,
  UPDATE_SUBJECT: id => `/subjects/${id}`,
  DELETE_SUBJECT: id => `/subjects/${id}`,
  ADD_CHAPTER: () => `/chapters`,
  GET_CHAPTER: () => `/chapters`,
  EDIT_CHAPTER: id => `/chapters/${id}`,
  UPDATE_CHAPTER: id => `/chapters/${id}`,
  DELETE_CHAPTER: id => `/chapters/${id}`,
  ADD_LANGUAGES: () => `/languages`,
  GET_LANGUAGES: () => `/languages`,
  EDIT_LANGUAGES: id => `/languages/${id}`,
  UPDATE_LANGUAGES: id => `/languages/${id}`,
  DELETE_LANGUAGES: id => `/languages/${id}`,
  ADD_ACADEMIC_YEAR: () => `/academic-years`,
  GET_ACADEMIC_YEAR: () => `/academic-years`,
  EDIT_ACADEMIC_YEAR: id => `/academic-years/${id}`,
  UPDATE_ACADEMIC_YEAR: id => `/academic-years/${id}`,
  DELETE_ACADEMIC_YEAR: id => `/academic-years/${id}`,
  GET_NOTIFICATIION: userType => `/notifications?user_type=${userType}`,
  ADD_NOTIFICATION: () => `/notifications`,
  EDIT_NOTIFICATION: id => `/notifications/${id}`,
  DELETE_NOTIFICATION: id => `/notifications/${id}`,
};
export default URLS;
