import { useState } from 'react';

import AdminListItem from '../AdminListItem';
import Filter from '../../forms/Filter';
import Modal from '../Modal';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { ShopItem } from '../../../types/products';

interface AdminListProps {
  selectProduct: (x: ShopItem) => void;
}

const AdminList = ({ selectProduct }: AdminListProps) => {
  const store = useAppSelector((state) => state.productsDetail);
  const { allProducts } = store.products;
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<ShopItem[] | undefined | string>([]);
  console.log('🚀 ~ filteredData:', filteredData);

  const handleSelect = (product: ShopItem) => {
    selectProduct(product);
  };

  const handleClose = () => {
    setShowFilter(false);
  };

  const showModal = () => {
    setShowFilter(true);
  };

  const showFilterModal = showFilter && (
    <Modal onClose={handleClose}>
      <Filter setFilteredData={setFilteredData}></Filter>
    </Modal>
  );

  return (
    <div className={`adminlist__container`}>
      {showFilterModal}
      <div className="adminlist__action">
        <h3>Inventory</h3>
        <div className="filter">
          <button onClick={showModal} type="button">
            Filter
          </button>
        </div>
        <p className="filter-info">Showing 10 of 50 products</p>
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
