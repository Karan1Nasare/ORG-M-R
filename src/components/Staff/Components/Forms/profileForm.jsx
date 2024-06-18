// Components/Forms/profileForm.jsx

import React from 'react';

const ProfileForm = () => {
  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h2>Org & Personal Details</h2>
      <form>
        <label>
          Org Name:
          <input type='text' name='orgName' />
        </label>
        <br />
        <label>
          Org Phone Number:
          <input type='text' name='orgPhoneNumber' />
        </label>
        <br />
        {/* Add the rest of the form fields here */}
        <label>
          Email:
          <input type='text' name='email' />
        </label>
        <br />
        <label>
          Website:
          <input type='text' name='website' />
        </label>
        <br />
        <label>
          GST Number:
          <input type='text' name='gstNumber' />
        </label>
        <br />
        <label>
          State:
          <input type='text' name='state' />
        </label>
        <br />
        <label>
          Org Address:
          <input type='text' name='orgAddress' />
        </label>
      </form>
    </div>
  );
};

export default ProfileForm;
