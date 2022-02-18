import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortSelect({ value, onChange }) {

  return (
    <Box>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="simple-select-label">Sorting</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          label="Sorting"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <MenuItem value={'name'}>Name part</MenuItem>
          <MenuItem value={'manufacturer'}>Manufacture</MenuItem>
          <MenuItem value={'model'}>Model</MenuItem>
          <MenuItem value={'year'}>Year</MenuItem>
          <MenuItem value={'color'}>Color</MenuItem>
          <MenuItem value={'price'}>Price</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}