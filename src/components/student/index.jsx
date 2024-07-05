import React, { useCallback, useEffect, useState } from 'react';
import { PaginationItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Cards from './components/cards';
import Header from './components/Header/Header';
import Pagination from '../shared/Pagination';
import { students } from './Student-data';
import { getAllStudent } from '../../service/student';
import useFetcher from '../../hooks/useFetcher';
import Loader from '../shared/Loader';
import colors from '../../theme/colors';

// Ensure the path is correct

const Index = () => {
  // TODO: useAdmin hooks
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const itemsPerPage = 6;
  const { fetcher, getExecutorState } = useFetcher();

  const fetchAdmins = () => {
    fetcher({
      key: 'fetch_student',
      executer: () =>
        getAllStudent({
          search: searchTerm,
          page,
          page_size: itemsPerPage,
        }),
      onSuccess: response => {
        const responseData = response.data?.data;
        const totalRecords = responseData?.total;
        setTotalPage(Math.ceil(totalRecords / itemsPerPage));
        setStudentData(responseData);
      },
      onFailureRoute: '',
      onFailure: err => {
        console.error('Error while fetching admins', err);
      },
      showSuccessToast: false,
    });
  };

  useEffect(() => {
    fetchAdmins();
  }, [searchTerm, page]);

  const navigate = useNavigate();

  const handleSearchChange = event => {
    setPage(1);
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div
        className='w-full'
        style={{
          height: '100%', // Ensure container takes full viewport height
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
        }}
      >
        <Header
          inputValue={searchTerm}
          handleInputChange={handleSearchChange}
        />
        <div
          className='mt-5'
          style={{
            flex: 1,
            overflowY: 'auto', // Enable scrolling for this box
            paddingBottom: '200px', // Add padding to ensure last item is not cut off
          }}
        >
          <Cards cards={studentData} />

          {getExecutorState('fetch_student').isLoading && <Loader />}
          {!getExecutorState('fetch_student').isLoading &&
            studentData &&
            studentData.length > 0 && (
              <Pagination
                count={totalPage}
                page={page}
                onChange={handlePageChange}
                renderItem={item => <PaginationItem {...item} />}
                sx={{
                  mt: '25px',
                  '& .MuiPaginationItem-root': {
                    color: 'rgba(125, 143, 179, 1)',
                    '&.Mui-selected': {
                      color: colors.white,
                    },
                    '&:hover': {
                      backgroundColor: colors.secondary__fill__dark,
                      color: colors.white,
                    },
                  },
                  '& .MuiPaginationItem-previousNext': {
                    backgroundColor: colors.white,
                    color: colors.black,
                  },
                }}
              />
            )}
        </div>
      </div>
    </>
  );
};

export default Index;
