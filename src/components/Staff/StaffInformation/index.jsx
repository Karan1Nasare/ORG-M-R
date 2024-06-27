import React from 'react';
import { useLocation } from 'react-router-dom';

import StaffViewPage from './StaffViewPage';

const Index = () => {
  const location = useLocation();
  const { staffData } = location.state || {};

  if (!staffData) {
    return <div>No staff data available.</div>;
  }
  return (
    <div>
      <StaffViewPage data={staffData} />
    </div>
  );
};

export default Index;
