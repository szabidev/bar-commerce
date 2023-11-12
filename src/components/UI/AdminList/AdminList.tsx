import { useAppSelector } from '../../../hooks/useAppSelector';
import { FC } from 'react';
import styled from '@emotion/styled';

import AdminListItem from '../AdminListItem';
import CloseIcon from '@mui/icons-material/Close';

interface AdminListProps {
  showInventory: boolean;
  setInventory: (x: boolean) => void;
}

const AdminList: FC<AdminListProps> = ({ showInventory, setInventory }) => {
  const store = useAppSelector((state) => state.productsDetail);
  const { allProducts } = store.products;

  const StyledCloseIcon = styled(CloseIcon)({
    fontSize: '46px',
    position: 'absolute',
    top: 0,
    right: 10,
    transition: 'all .6s ease',
    cursor: 'pointer',

    '&:hover': {
      transform: 'rotate(90deg)',
    },
  });

  const handleCancel = () => {
    setInventory(false);
  };

  return (
    <div className={`adminlist__container ${showInventory ? 'active' : ''}`}>
      <div className="adminlist__action">
        <StyledCloseIcon onClick={handleCancel} />
        <h3>Inventory</h3>
        <div className="filter">
          <button type="button">Filter</button>
        </div>
        <p className="filter-info">Showing 10 of 50 items</p>
      </div>
      <ul className="products__list">
        {allProducts.map((product) => (
          <AdminListItem image={product.image} name={product.name} productClass={product.class} />
        ))}
      </ul>
    </div>
  );
};

export default AdminList;
