import { useState } from 'react';

import { Paper } from '@mui/material';

import AdminForm from '../../forms/Admin';
import AdminList from '../../UI/AdminList';

import { ShopItem } from '../../../types/products';

const Admin = () => {
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);

  const selectProduct = (product: ShopItem) => {
    setSelectedItem(product);
  };

  return (
    <div className="admin__container">
      <AdminForm selectedItem={selectedItem} setSelectedItem={setSelectedItem} />

      <Paper sx={{ maxHeight: '660px' }}>
        <AdminList selectProduct={selectProduct} />
      </Paper>
    </div>
  );
};

export default Admin;
