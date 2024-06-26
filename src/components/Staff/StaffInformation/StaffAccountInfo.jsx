import { Grid, Stack, TextField } from '@mui/material';
import React from 'react';
import TabTitle from '../../shared/TabTitle';
import Button from '../../shared/buttons/Button';
import UpdateAccountField from './UpdateAccountField';

const StaffAccountInfo = ({ data }) => {
  // Call Update Api Here
  const handleUpdateUserName = updateData => {
    console.debug('update user name', updateData);
  };

  const handleUpdatePassword = updateData => {
    console.debug('update password', updateData);
  };

  return (
    <>
      <Stack sx={{ margin: '20px 0' }}>
        <TabTitle title={data?.name} />
      </Stack>
      <Stack>
        {/* Update User Name */}

        <div className='bg-secondary__fill text-white rounded-lg p-4 text-start border border-gray-600'>
          <label className='block  text-gray-600'>Username</label>
          <p className='text-lg'>{data?.username}</p>
        </div>
        {/* Update Password */}
        <UpdateAccountField
          label={'Password'}
          value={data?.password}
          formFields={[
            {
              label: 'Current Password*',
              name: 'current_password',
              type: 'text',
              placeholder: 'Enter Current Password',
              value: '',
              required: true,
            },
            {
              label: 'New Password*',
              name: 'new_password',
              type: 'text',
              placeholder: 'Enter New Password',
              value: '',
              required: true,
            },
            {
              label: 'New Confirm Password*',
              name: 'new_confirm_password',
              type: 'text',
              placeholder: 'New Conform Password',
              value: '',
              required: true,
            },
          ]}
          isPassword={true}
          handleUpdate={handleUpdatePassword}
        />
      </Stack>
    </>
  );
};

export default StaffAccountInfo;
