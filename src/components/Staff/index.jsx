import React from 'react';
import { FaEye } from 'react-icons/fa';
import StaffCard from './Components/StaffCard';
import Header from './Components/header';
import AddStaffForm from './Components/AddStaffForm';
import useStaff from './hooks/useStaff';
import Loader from '../shared/Loader';

const App = () => {
  const { staffList, loading, error, confirmDeleteHandler } = useStaff();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <p className='text-white'>Error loading staff data: {error.message}</p>
    );
  }

  return (
    <div className='min-h-screen'>
      <h1 className='text-3xl mb-4 flex text-white'>Staff</h1>
      <Header />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {staffList?.data?.map((staff, index) => (
          <StaffCard key={index} data={staff} onDelete={confirmDeleteHandler} />
        ))}
      </div>
    </div>
  );
};

export default App;
