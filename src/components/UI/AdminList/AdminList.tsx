import { FC } from 'react';

import AdminListItem from '../AdminListItem';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { ShopItem } from '../../../types/products';

interface AdminListProps {
  selectProduct: (x: ShopItem) => void;
  isDeleting: boolean;
}

const AdminList: FC<AdminListProps> = ({ selectProduct, isDeleting }) => {
  const store = useAppSelector((state) => state.productsDetail);
  const { allProducts } = store.products;

  const handleSelect = (product: ShopItem) => {
    selectProduct(product);
  };

  return (
    <div className={`adminlist__container`}>
      <div className="adminlist__action">
        <h3>Inventory</h3>
        <div className="filter">
          <button type="button">Filter</button>
        </div>
        <p className="filter-info">Showing 10 of 50 items</p>
      </div>
      <ul className="products__list">
        {allProducts.map((product) => (
          <AdminListItem
            key={product.id}
            image={product.image}
            name={product.name}
            productClass={product.class}
            onSelect={() => handleSelect(product)}
          />
        ))}
      </ul>
    </div>
  );
};

export default AdminList;
