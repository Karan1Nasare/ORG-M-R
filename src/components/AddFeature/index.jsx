import { Button, Typography } from '@mui/material';
import React from 'react';
import AddFeatureDetails from '../shared/AddFeatureDetails';
import UploadImage from '../shared/uploadImage/uploadImage';
import useAddFeatures from './hooks/useAddFeature';

const AddFeatureCard = () => {
  const {
    handleAddFeature,
    newFeature,
    onFeatureChange,
    selectedFile,
    setSelectedFile,
  } = useAddFeatures();

  return (
    <div>
      <Typography className='flex align-items-start' variant='mainLayoutTitle'>
        Features
      </Typography>
      <UploadImage
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <AddFeatureDetails feature={newFeature} onChange={onFeatureChange} />
      <div className='flex justify-end mt-6 '>
        <Button
          variant='contained'
          className='bg-white text-black hover:text-white'
          sx={{
            backgroundColor: 'white',
            color: 'black',
            fontSize: '1rem',
            fontWeight: '400',
          }}
          onClick={handleAddFeature}
        >
          Add Feature
        </Button>
      </div>
    </div>
  );
};

export default AddFeatureCard;
