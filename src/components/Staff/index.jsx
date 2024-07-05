import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import StaffCard from './Components/StaffCard';
import Header from './Components/header'; // Ensure this import matches your filename
import AddStaffForm from './Components/AddStaffForm';
import Pagination from '../shared/Pagination';
import useStaff from './hooks/useStaff';
import Loader from '../shared/Loader';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { staffList, loading, error, onDeleteStaff } = useStaff();
  const ITEMS_PER_PAGE = 6;

  const data = staffList?.data || []; // Ensure staffList.data is an array
  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentStaff = data.slice(firstCardIndex, lastCardIndex); // Use the correct array
  const totalShowItems = data.length;

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
        {currentStaff.map((staff, index) => (
          <StaffCard key={index} data={staff} onDelete={onDeleteStaff} />
        ))}
      </div>
      {totalShowItems > ITEMS_PER_PAGE && (
        <Pagination
          totalCards={totalShowItems}
          cardsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;
