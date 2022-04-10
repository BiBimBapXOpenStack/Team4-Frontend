import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel } from '@mui/material';

const SelectBase = (props) => {
  const { inputItems, setTimeType } = props;

  const [value, setValue] = useState('24');
  const [menuItems, setMenuItems] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(inputItems);
    setMenuItems(inputItems);
    setTimeType(value);
  }, [inputItems, setTimeType, value]);

  return (
    <div style={{ float: 'right' }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-label">TimeType</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={value}
          label="TimeType"
          onChange={handleChange}
        >
          {menuItems &&
            menuItems.map((index, value) => (
              <MenuItem key={value} value={index}>{`${index}`}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectBase;
