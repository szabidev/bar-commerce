import { Paper } from '@mui/material';
import { FC } from 'react';

interface AdminListItemProps {
  name: string;
  productClass: string;
  image: string;
}

const AdminListItem: FC<AdminListItemProps> = ({ image, name, productClass }) => {
  return (
    <li className="adminlist__item">
      <Paper sx={{ margin: '15px 0' }}>
        <div className="list__item">
          <div className="list__image">
            <img src={image} alt={name} />
          </div>
          <div className="list__info">
            <p>{name}</p>
            <p>{productClass}</p>
          </div>
        </div>
      </Paper>
    </li>
  );
};

export default AdminListItem;
