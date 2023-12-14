import { useNavigate } from 'react-router-dom';

import LiquorIcon from '@mui/icons-material/Liquor';

const Logo = () => {
  const navigate = useNavigate();

  const goToDashBoard = () => {
    navigate('/');
  };
  return (
    <div className="logo__container" onClick={goToDashBoard}>
      <p className="logo__title">Bar</p>
      <LiquorIcon htmlColor={'white'} />
      <p className="logo__title">Stuff</p>
    </div>
  );
};

export default Logo;
