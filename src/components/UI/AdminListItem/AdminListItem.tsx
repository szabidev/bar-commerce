import { FC } from 'react';

import { Paper } from '@mui/material';

interface AdminListItemProps {
  name: string;
  productClass: string;
  image: string;
  onSelect: () => void;
}

const AdminListItem: FC<AdminListItemProps> = ({ image, name, productClass, onSelect }) => {
  return (
    <li className="adminlist__item" onClick={onSelect}>
      <Paper sx={{ margin: '15px 0' }}>
        <div className="list__item">
          <div className="list__image">
            <img src={image} alt={name} />
          </div>
          <div className="list__info">
            <p>{name}</p>
            <p className="list__class">{productClass}</p>
          </div>
        </div>
      </Paper>
    </li>
  );
};

export default AdminListItem;
