import { FC } from 'react';
import Link from '@mui/material/Link';

const Register: FC<{ onClose: () => void; setShowLogin: (x: boolean) => void }> = ({ onClose, setShowLogin }) => {
  const linkStyle = {
    color: 'rgb(255,255,255)',
    letterSpacing: '1px',
  };

  const handleRegisterSubmit = (event: any) => {
    console.log(event.target.value);
  };

  const redirectToLogin = () => {
    setShowLogin(true);
    onClose();
  };

  return (
    <form className="register__form" onSubmit={handleRegisterSubmit}>
      <div className="title">Register Account</div>
      <div className="register__form--group">
        <div className="register__form--control">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter name" id="name" name="name" autoComplete="off" />
        </div>
        <div className="register__form--control">
          <label htmlFor="email">E-mail</label>
          <input type="text" placeholder="Enter email address" id="email" name="email" autoComplete="off" />
        </div>
        <div className="register__form--control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter password" autoComplete="off" />
        </div>
        <div className="register__form--special">
          <p className="login__action" onClick={redirectToLogin}>
            Already have an account? Sign In
          </p>
        </div>
      </div>
      <div className="register__form--action">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" onClick={handleRegisterSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;
