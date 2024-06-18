// AddNotification.js
import React from 'react';
import Header from './components/header';
import AddNotificationForm from './components/addNotificationForm';
import useAddNotification from './hooks/useAddNotification';

const AddNotification = () => {
  const {
    newNotification,
    selectedFile,
    setSelectedFile,
    handleAddNotification,
    onNotificationChange,
  } = useAddNotification();

  return (
    <div className='flex flex-col p-8 -mt-7 space-y-8'>
      <h1 className='text-white text-3xl text-left'>Notification</h1>
      <Header />

      <AddNotificationForm
        newNotification={newNotification}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        onChange={onNotificationChange}
        handleAddNotification={handleAddNotification}
      />
    </div>
  );
};

export default AddNotification;
