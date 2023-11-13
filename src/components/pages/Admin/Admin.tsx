import { useState } from 'react';
import AdminForm from '../../forms/Admin';
import AdminProductCard from '../../card/AdminProductCard';
import AdminList from '../../UI/AdminList';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { ShopItem } from '../../../types/products';

const Admin = () => {
  const [showInventory, setShowInventory] = useState<boolean>(false);
  const store = useAppSelector((state) => state.productsDetail.products);
  const { lastAdded } = store;
  const [selectedItem, setSelectedItem] = useState<ShopItem>({
    class: '',
    description: '',
    image: '',
    isPromo: '',
    material: '',
    name: '',
    price: 0,
    quantity: 0,
    type: '',
    author: '',
  });

  const handleInventory = () => {
    setShowInventory(!showInventory);
  };

  const selectProduct = (product: ShopItem) => {
    setSelectedItem(product);
  };

  return (
    <div className="admin__container">
      <button type="button" className="show__filter" onClick={handleInventory}>
        Show Inventory
      </button>
      <AdminForm selectedItem={selectedItem} />
      <AdminProductCard lastAdded={lastAdded} selectedItem={selectedItem} />
      {showInventory && (
        <AdminList
          selectProduct={selectProduct}
          showInventory={showInventory}
          setInventory={setShowInventory}
        />
      )}
    </div>
  );
};

export default Admin;
