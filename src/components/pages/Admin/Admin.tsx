import { useState } from 'react';
import AdminForm from '../../forms/Admin';
import AdminProductCard from '../../card/AdminProductCard';
import AdminList from '../../UI/AdminList';

const Admin = () => {
  const [showInventory, setShowInventory] = useState<boolean>(false);

  const handleInventory = () => {
    setShowInventory(!showInventory);
  };

  return (
    <div className="admin__container">
      <button type="button" className="show__filter" onClick={handleInventory}>
        Show Inventory
      </button>
      <AdminForm />
      <AdminProductCard />
      {showInventory && <AdminList showInventory={showInventory} setInventory={setShowInventory} />}
    </div>
  );
};

export default Admin;
