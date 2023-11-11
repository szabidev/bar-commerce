import { FC, useState } from 'react';
import { routes } from '../../../app-router';

import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

import Logo from '../Logo';
import Modal from '../Modal';
import SearchInput from '../../forms/SearchInput';
import UserMenu from '../UserMenu/UserMenu';

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePopup = () => {
    console.log('search');
    setIsModalOpen(!isModalOpen);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const StyledLink = styled(Link)({
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',

      textUnderlineOffset: '8px',
    },
  });

  const searchModal = isModalOpen && (
    <Modal onClose={onClose}>
      <SearchInput onClose={onClose} />
    </Modal>
  );

  return (
    <div className="header__container">
      <header className="header">
        <div className="header__menu">
          <div className="header__menu--main">
            <Tooltip title={'Search form'}>
              <SearchIcon
                sx={{ color: 'white' }}
                fontSize="large"
                cursor="pointer"
                onClick={handlePopup}
              />
            </Tooltip>
            {searchModal}
            <Logo />
            <div className="header__menu--main__signin">
              <UserMenu />
            </div>
          </div>
          <div className="header__menu--secondary">
            <StyledLink to={routes.BARWARE} className="header__menu--secondary__items">
              Barware
            </StyledLink>
            <StyledLink to={routes.BOOKS} className="header__menu--secondary__items">
              Books
            </StyledLink>
            {/* dropdown */}
            <StyledLink to={routes.GLASSWARE} className="header__menu--secondary__items">
              Glassware
            </StyledLink>
            <StyledLink to={routes.KNIVES} className="header__menu--secondary__items">
              Knives
            </StyledLink>
            <StyledLink to={routes.SETS} className="header__menu--secondary__items">
              Sets & kits
            </StyledLink>
            {/* Add hover effect on elements */}
            {/* menu items some with dropdwon menu with routes */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
