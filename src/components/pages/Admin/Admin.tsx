import { useState } from 'react';
import AdminForm from '../../forms/Admin';
import AdminList from '../../UI/AdminList';
import { ShopItem } from '../../../types/products';
import { Paper } from '@mui/material';

const Admin = () => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
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

  const selectProduct = (product: ShopItem) => {
    setSelectedItem(product);
  };

  return (
    <div className="admin__container">
      <AdminForm selectedItem={selectedItem} setIsDeleting={setIsDeleting} />

      <Paper sx={{ maxHeight: '660px' }}>
        <AdminList selectProduct={selectProduct} isDeleting={isDeleting} />
      </Paper>
    </div>
  );
};

export default Admin;
