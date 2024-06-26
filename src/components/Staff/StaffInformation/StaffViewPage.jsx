import { Stack, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Icon } from '@iconify/react';

import { useNavigate, useParams } from 'react-router-dom';
import TabTitle from '../../shared/TabTitle';
import Button from '../../shared/buttons/Button';

import PATH_DASHBOARD from '../../../routes/path';
import StudentData from './StaffData';
import ArrowRight from '../../icon/ArrowRight';
import StaffDetailInfo from './StaffDetailInfo';
import StaffAccountInfo from './StaffAccountInfo';
import GrowthReport from './GrowthReport';

const StaffViewPage = ({ data, onDelete }) => {
  console.log('🚀 ~ StaffViewPage ~ data:', data);
  const navigate = useNavigate();
  const [Tabvalue, setTabValue] = useState('1');
  const [organizationDetails, setorganizationDetails] = useState();

  const handleEditClick = id => {
    navigate(`/editStaff/${id}`);
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const AdminDetailsTabs = activeTab => {
    const TabsList = {
      1: <StaffDetailInfo data={data} />,
      2: <StaffAccountInfo data={data} />,
      3: <GrowthReport />,
    };

    return TabsList[activeTab];
  };

  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <TabTitle title={'Staff '} />
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Button
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
          >
            Manage
          </Button>
          <Button
            onClick={() => handleEditClick(data?.id)}
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
            startIcon={<Icon icon='basil:edit-outline' />}
          >
            Edit
          </Button>

          <Button
            onClick={() => onDelete(data?.id)}
            sx={{
              background: 'rgba(255,102,146,0.2)',
              color: 'rgba(255, 102, 146, 1)',
              padding: '8px 16px',
            }}
            startIcon={
              <FiTrash2 className='text-[rgba(255, 102, 146, 1)] cursor-pointer' />
            }
          >
            Delete
          </Button>

          <Button
            type='button'
            variant='contained'
            sx={{
              background: 'transparent',
              color: 'white',
              padding: '8px 16px',
            }}
            startIcon={<ArrowRight className='rotate-180' />}
          >
            Back
          </Button>
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: '100%',
          marginTop: '20px',
          paddingBottom: '150px',
        }}
      >
        <Tabs
          value={Tabvalue}
          onChange={handleChange}
          aria-label='icon position tabs example'
          sx={{ width: 'max-content', bgcolor: 'transparent', mb: 4 }}
        >
          <Tab
            icon={<Icon icon='gg:profile' width={25} />}
            iconPosition='start'
            label='Basic Info'
            sx={{ gap: '15px' }}
            value={'1'}
          />
          <Tab
            icon={<Icon icon={'hugeicons:information-diamond'} width={25} />}
            iconPosition='start'
            label='Account Info'
            sx={{ gap: '15px' }}
            value={'2'}
          />
          <Tab
            icon={<Icon icon={'hugeicons:information-diamond'} width={25} />}
            iconPosition='start'
            label='Growth Report'
            sx={{ gap: '15px' }}
            value={'3'}
          />
        </Tabs>
        {AdminDetailsTabs(Tabvalue)}
      </Stack>
    </>
  );
};

export default StaffViewPage;
