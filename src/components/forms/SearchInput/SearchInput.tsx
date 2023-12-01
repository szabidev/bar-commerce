import { ChangeEvent, FC } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { setSearchTerm } from '../../../store';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { routes } from '../../../app-router';

const SearchInput: FC<{ onClose: () => void }> = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.userDetails);
  const { searchTerm } = store;

  const handleSearch = (event: any) => {
    event.preventDefault();
    navigate(routes.BARSTUFF);
    onClose();
    console.log(searchTerm);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <form className="search__form" onSubmit={handleSearch}>
      <div className="search__form--control">
        <label htmlFor="search__bar">Search</label>
        <input
          type="text"
          id="search__bar"
          name="search__bar"
          placeholder="Search for stuff..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <SearchIcon
        sx={{ color: 'white' }}
        fontSize="large"
        cursor="pointer"
        className="search"
        onClick={handleSearch}
      />
      <Tooltip title="Close">
        <CloseIcon
          sx={{ color: 'white' }}
          fontSize="large"
          cursor="pointer"
          className="close"
          onClick={onClose}
        />
      </Tooltip>
    </form>
  );
};

export default SearchInput;
