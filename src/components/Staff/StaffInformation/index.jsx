import React from 'react';
import { useLocation } from 'react-router-dom';

import StaffViewPage from './StaffViewPage';

const Index = () => {
  const location = useLocation();
  const { staffData, onDelete } = location.state || {};

  if (!staffData) {
    return <div>No staff data available.</div>;
  }
  return (
    <div>
      <StaffViewPage data={staffData} onDelete={onDelete} />
    </div>
  );
};

export default Index;
