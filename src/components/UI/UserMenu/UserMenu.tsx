import { FC, useState } from 'react';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';

import Modal from '../Modal';
import Login from '../../forms/Login/Login';
import Register from '../../forms/Register';
import { Link } from 'react-router-dom';
import { routes } from '../../../app-router';
import { useAppSelector } from '../../../hooks/useAppSelector';
import CartCounter from '../CartCounter';

const UserMenu: FC = () => {
  const store = useAppSelector((state) => state);
  const { isSignedIn, isRegistered, isAdmin } = store.userDetails;
  const { totalItems } = store.cartDetail;
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showRegister, setShowRegister] = useState<boolean>(false);

  const handleLoginPopup = () => {
    setShowLogin(true);
  };

  const handleRegisterPopup = () => {
    setShowRegister(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const closeRegister = () => {
    setShowRegister(false);
  };

  const loginModal = showLogin && (
    <>
      <Modal onClose={closeLogin}>
        <Login onClose={closeLogin} />
      </Modal>
    </>
  );

  const registerModal = showRegister && (
    <>
      <Modal onClose={closeRegister}>
        <Register onClose={closeRegister} setShowLogin={setShowLogin} />
      </Modal>
    </>
  );

  return (
    <>
      {isSignedIn && !isAdmin && (
        <>
          <Tooltip title="Shopping cart">
            <Link to={routes.CART}>
              <ShoppingCartIcon htmlColor="white" cursor="pointer" />
              {totalItems !== 0 && <CartCounter />}
            </Link>
          </Tooltip>
          <Tooltip title="Log out">
            <LogoutIcon htmlColor="white" cursor="pointer" />
          </Tooltip>
        </>
      )}
      {isSignedIn && isAdmin && isRegistered && (
        <>
          <Tooltip title="Admin Panel">
            <Link to={routes.ADMIN}>
              <AdminPanelSettingsIcon htmlColor="white" cursor="pointer" />
            </Link>
          </Tooltip>
          <Tooltip title="Shopping cart">
            <Link to={routes.CART}>
              <ShoppingCartIcon htmlColor="white" cursor="pointer" />
              {totalItems !== 0 && <CartCounter />}
            </Link>
          </Tooltip>
          <Tooltip title="Log out">
            <LogoutIcon htmlColor="white" cursor="pointer" />
          </Tooltip>
        </>
      )}
      {!isSignedIn && !isRegistered && (
        <>
          <Tooltip title="Register">
            <>
              <PeopleIcon htmlColor="white" cursor="pointer" onClick={handleRegisterPopup} />
              {registerModal}
            </>
          </Tooltip>
          <Tooltip title="Shopping cart">
            <Link to={routes.CART}>
              <ShoppingCartIcon htmlColor="white" cursor="pointer" />
              {totalItems !== 0 && <CartCounter />}
            </Link>
          </Tooltip>
        </>
      )}
      {!isSignedIn && isRegistered && (
        <>
          <Tooltip title="Sign in">
            <>
              <PersonIcon htmlColor="white" cursor="pointer" onClick={handleLoginPopup} />
              {loginModal}
            </>
          </Tooltip>
          <Tooltip title="Shopping cart">
            <Link to={routes.CART}>
              <ShoppingCartIcon htmlColor="white" cursor="pointer" />
              {totalItems !== 0 && <CartCounter />}
            </Link>
          </Tooltip>
        </>
      )}
    </>
  );
};

export default UserMenu;
