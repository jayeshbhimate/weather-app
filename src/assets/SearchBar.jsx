import React, { useState } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <TextField
        variant="outlined"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        fullWidth
      />
      <IconButton color="primary" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
