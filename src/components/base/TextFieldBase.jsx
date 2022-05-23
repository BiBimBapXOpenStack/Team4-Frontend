import { TextField } from '@mui/material';
import React from 'react';

const TextFieldBase = (props) =>{
  const {id, type, label, variant, onChange, helperText = undefined, value} = props;

  return (
    <TextField
      id = {id}
      type={type}
      label = {label}
      variant = {variant}
      onChange={onChange}
      helperText={helperText}
      value={value}
    />
  );
}

export default TextFieldBase;