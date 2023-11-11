import { ChangeEvent, FC, useState } from 'react';
import './Login.scss'; // why I have to import it here?

const Login: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [loginAddress, setLoginAddress] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginAddress(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginPassword(event.target.value);
  };

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <div className="login__form--group">
        <div className="login__form--control">
          <label htmlFor="email">E-mail</label>
          <input type="text" placeholder="Enter email address" id="email" name="email" onChange={handleLoginChange} value={loginAddress} />
        </div>
        <div className="login__form--control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter password" onChange={handlePasswordChange} value={loginPassword} />
        </div>
      </div>
      <div className="login__form--action">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
