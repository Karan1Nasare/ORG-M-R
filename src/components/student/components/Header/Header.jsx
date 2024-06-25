import React from 'react';
import { TiUserAdd } from 'react-icons/ti';
import { IoIosAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Grid, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
// import { TiUserAdd } from 'react-icons/ti';

const Header = ({ inputValue, handleInputChange, handleSearchClick }) => {
  const navigate = useNavigate();
  const handleAddStudentsClick = () => {
    navigate('/student/addStudent');
  };

  const handleAddMultipleClick = () => {
    navigate('/student/addMultipleStudent');
  };
  return (
    <div>
      <h1 className='text-white text-3xl text-left mb-3'>Student</h1>
      <div className='flex justify-between h-28 p-6 rounded-xl border border-gray-700 border-solid bg-[#0B1739]  max-md:flex-wrap max-md:px-5'>
        {/* <div className='flex items-center bg-[#0B1739] p-4 space-x-4 justify-between'> */}

        <Grid container spacing={2} sx={{ flex: 1 }}>
          <Grid
            item
            sm={6}
            md={3}
            xs={12}
            sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <Stack>
              <input
                key={7}
                onChange={handleInputChange}
                value={inputValue}
                className='p-2 h-11 rounded-sm text-white w-80  bg-secondary__fill__dark'
                type='text'
                placeholder=' Search Name, Innrollment, Standard'
              />
            </Stack>

            <button className='bg-[#0A1330] rounded-md p-[10px] flex items-center justify-center'>
              <Icon
                icon={'octicon:filter-16'}
                className='text-white'
                width={25}
              />
            </button>
          </Grid>
        </Grid>
        <div className='flex mt-1'>
          <div
            onClick={handleAddStudentsClick}
            className='flex mx-2 px-3 bg-white h-11 w-32 py-3 text-sm rounded-md'
          >
            <span className='pt-1 mr-1'>
              <TiUserAdd />
            </span>
            <button>Add Students</button>
          </div>
          <div
            onClick={handleAddMultipleClick}
            className='flex text-sm bg-white h-11 py-3 px-4 w-32 rounded-md'
          >
            <span className='pt-1 mr-1'>
              <IoIosAddCircle />
            </span>
            <button>Add Multiple</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
