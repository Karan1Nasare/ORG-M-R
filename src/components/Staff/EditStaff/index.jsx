import React from 'react';
import EditStaff from './EditStaff';
import useEditStaff from './hooks/useEditStaff';

const Index = () => {
  const { staffDataById } = useEditStaff();
  return (
    <div>
      <EditStaff staffDataById={staffDataById} />
    </div>
  );
};

export default Index;
