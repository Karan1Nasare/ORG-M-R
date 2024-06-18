import { Stack, Box, Grid } from '@mui/material';
import React from 'react';
import TabTitle from '../../shared/TabTitle';
import ActiveInfoCard from './ActiveInfoCard';

const StudentDetailInfo = ({ organization }) => {
  return (
    <>
      <Stack sx={{ margin: '20px 0' }}>
        <TabTitle title='Chirag Gondaliya Details' />
      </Stack>
      <Box sx={{ display: 'flex' }}>
        <Stack
          sx={{
            maxWidth: '180px',
            maxHeight: '180px',
            height: '100%',
            minHeight: '180px',
            minWidth: '180px',
            width: '100%',
            background: theme => theme.color.secondary__fill,
            padding: '15px',
            border: theme => `1px solid ${theme.color.border_color}`,
            borderRadius: '8px',
          }}
        >
          <img
            src={organization?.profileImage}
            className='w-full h-full min-h-[150px]'
          />
        </Stack>
        <Grid container sx={{ marginLeft: '20px' }}>
          <Grid item sx={{ flex: 1, height: '100%' }}>
            <Stack sx={{ flex: 1, marginLeft: '20px', height: '100%' }}>
              <ActiveInfoCard
                tital={'Active Students'}
                CircleColor={'bright_green'}
                bageColor={'success'}
                bageColorLight={'success'}
                count={200}
              />
            </Stack>
          </Grid>
          <Grid item sx={{ flex: 1, height: '100%' }}>
            <Stack sx={{ flex: 2, marginLeft: '20px', height: '100%' }}>
              <ActiveInfoCard
                tital={'Active Staff'}
                CircleColor={'bright_green'}
                bageColor={'tealGreen'}
                bageColorLight={'tealGreen__opacity'}
                count={200}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Stack
        sx={{
          background: theme => theme.color.secondary__fill,
          padding: '20px',
          border: theme => `1px solid ${theme.color.border_color}`,
          borderRadius: '8px',
          marginTop: '10px',
          width: '100%',
        }}
        direction={'row'}
      >
        <Stack spacing={5} sx={{ flex: 1 }}>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Org Name :
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {organization?.name}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Org Person Name :
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {organization?.name}
            </p>
          </Stack>

          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Alternative Phone Number
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {organization?.AlternativePhone || 'N/A'}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              State
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {organization?.state}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Address
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {organization?.address}
            </p>
          </Stack>
        </Stack>
        <Stack spacing={5} sx={{ flex: 1 }}>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Email :
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {organization?.email}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Phone Number:
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {organization?.phone}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Website
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {organization?.website || 'N/A'}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              City
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {organization?.city}
            </p>
          </Stack>
          <Stack>
            <p className='text-[rgba(255,255,255,0.5)] text-sm text-left'>
              Pincode
            </p>
            <p className='text-[rgba(255,255,255,1)] text-left'>
              {organization?.pincode}
            </p>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default StudentDetailInfo;
