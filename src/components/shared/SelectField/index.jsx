import React from 'react';
import { TextField, MenuItem, OutlinedInput } from '@mui/material';

import colors from '../../../theme/colors';

const SelectField = ({
  name,
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
  helperText,
  ...other
}) => {
  return (
    <TextField
      select
      labelId={name}
      value={value}
      onChange={onChange}
      error={!!error}
      input={<OutlinedInput />}
      {...other}
      size='small' // Adjust size as needed
      variant='outlined'
      sx={{ height: '3.5rem' }}
      SelectProps={{
        MenuProps: {
          PaperProps: {
            style: {
              maxHeight: 220,
            },
          },
        },
        renderValue: selected => (
          <span style={{ color: 'white' }}>
            {options.find(option => option.value === selected)?.label}
          </span>
        ),
      }}
    >
      {placeholder && (
        <MenuItem value='' disabled>
          <em>{placeholder}</em>
        </MenuItem>
      )}
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectField;
