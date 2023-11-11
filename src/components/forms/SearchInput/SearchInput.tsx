import React, { ChangeEvent, FC, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';

const SearchInput: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  // fix event type
  const handleSearch = (event: any) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className="search__form" onSubmit={handleSearch}>
      <div className="search__form--control">
        <label htmlFor="search__bar">Search</label>
        <input type="text" id="search__bar" name="search__bar" placeholder="Search for stuff..." value={searchTerm} onChange={handleChange} />
      </div>
      <SearchIcon sx={{ color: 'white' }} fontSize="large" cursor="pointer" className="search" onClick={handleSearch} />
      <Tooltip title="Close">
        <CloseIcon sx={{ color: 'white' }} fontSize="large" cursor="pointer" className="close" onClick={onClose} />
      </Tooltip>
    </form>
  );
};

export default SearchInput;
