import React from 'react';
import { FaEye } from 'react-icons/fa';
import StaffCard from './Components/StaffCard';
import Header from './Components/header';
import AddStaffForm from './Components/AddStaffForm';
import useStaff from './hooks/useStaff';

const students = [
  {
    name: 'Chirag Gondaliya',
    email: 'abcorg@gmail.com',
    number: '+91 6353264115',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
    icon: <FaEye style={{ fontSize: '1.2em' }} />,
    standardName: 'Standard',
    standard: '10th',
    enrollment: '45675467',
    enrollmentName: 'enrollment',
  },
  {
    name: 'Namya Gondaliya',
    email: 'abcorg2@gmail.com',
    number: '+91 6353264116',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
    icon: <FaEye style={{ fontSize: '1.2em' }} />,
    standardName: 'Standard',
    standard: '9th',
    enrollment: '45675468',
    enrollmentName: 'enrollment',
  },
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    number: '+91 6353264117',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
    icon: <FaEye style={{ fontSize: '1.2em' }} />,
    standardName: 'Standard',
    standard: '11th',
    enrollment: '45675469',
    enrollmentName: 'enrollment',
  },
  // Add more student objects as needed
];

const App = () => {
  const { staffList } = useStaff();
  console.log('🚀 ~ App ~ staffList:', staffList);
  return (
    <div className=' min-h-screen'>
      <h1 className='text-3xl mb-4 flex text-white'>Staff</h1>
      <Header />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {staffList?.data?.map((staff, index) => (
          <StaffCard key={index} data={staff} />
        ))}
      </div>
    </div>
  );
};

export default App;
