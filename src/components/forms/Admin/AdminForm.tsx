import { FormEvent, useState } from 'react';

import Container from '@mui/material/Container';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addProduct, lastProductAdded, setAllProducts } from '../../../store';
import { ShopItem } from '../../../types/products';
import { BASE_URL, path } from '../../../shared/ts/variables';
import { v4 as uuid } from 'uuid';

const initialState = {
  class: '',
  description: '',
  image: '',
  isPromo: false,
  material: '',
  name: '',
  price: 0,
  quantity: 0,
  type: '',
  author: '',
};

const containerStyle = {
  margin: '0',
  padding: 0,
  width: 'auto',
  minHeight: '700px',
};

interface AdminFormProps {
  selectedItem: ShopItem | null;
  setSelectedItem: (x: ShopItem | null) => void;
}

const AdminForm = ({ selectedItem, setSelectedItem }: AdminFormProps) => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productsDetail);
  const { allProducts } = products;
  const [productForm, setProductForm] = useState<ShopItem>(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductForm({
      ...productForm,
      [name]: value,
    });
  };

  const handlePromoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'yes') {
      setProductForm({
        ...productForm,
        isPromo: true,
      });
    }
    if (event.target.value === 'no') {
      setProductForm({
        ...productForm,
        isPromo: false,
      });
    }
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;

    switch (selectedType) {
      case 'barware':
        setProductForm({
          ...productForm,
          type: 'barware',
        });
        break;
      case 'machine':
        setProductForm({
          ...productForm,
          type: 'machine',
        });
        break;
      case 'glass':
        setProductForm({
          ...productForm,
          type: 'glass',
        });
        break;
      case 'book':
        setProductForm({
          ...productForm,
          type: 'book',
        });
        break;
      case 'set':
        setProductForm({
          ...productForm,
          type: 'set',
        });
        break;
      case 'knives':
        setProductForm({
          ...productForm,
          type: 'knives',
        });
        break;
      default:
        setProductForm({
          ...productForm,
          type: 'barware',
        });
    }
  };

  const submitHandler = async (product: ShopItem) => {
    // error handling
    await fetch(`${BASE_URL}${path.barstuff}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addProduct(data));
        dispatch(setAllProducts([...allProducts, data]));
        dispatch(lastProductAdded(data));
      });
  };

  const editHandler = async (id: string, updatedProduct: ShopItem) => {
    try {
      const response = await fetch(`${BASE_URL}${path.barstuff}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const updatedProducts = allProducts.map((product: ShopItem) =>
        product.id === id ? updatedProduct : product,
      );

      dispatch(setAllProducts(updatedProducts));
      // show a success message
    } catch (error: any) {
      console.error('Error updating product:', error.message);
      // Handle error
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedItem) {
      const dataForEdit = {
        class: productForm.class || selectedItem.class,
        description: productForm.description || selectedItem.description,
        image: productForm.image || selectedItem.image,
        isPromo: productForm.isPromo || selectedItem.isPromo,
        material: productForm.material || selectedItem.material,
        name: productForm.name || selectedItem.name,
        price: productForm.price || selectedItem.price,
        quantity: productForm.quantity || selectedItem.quantity,
        type: productForm.type || selectedItem.type,
        author: productForm.author || selectedItem.author,
        id: selectedItem?.id,
      };

      editHandler(selectedItem.id as string, dataForEdit);
      setProductForm(initialState);
    } else {
      const dataForPost = {
        class: productForm.class,
        description: productForm.description,
        image: productForm.image,
        isPromo: productForm.isPromo,
        material: productForm.material,
        name: productForm.name,
        price: productForm.price,
        quantity: productForm.quantity,
        type: productForm.type,
        author: productForm.author,
        id: uuid(),
      };

      submitHandler(dataForPost);
      setProductForm(initialState);
    }

    setSelectedItem(null);
  };

  const handleCancel = () => {
    setProductForm(initialState);
    setSelectedItem(null);
  };

  const removeProduct = () => {
    if (selectedItem) {
      handleDelete(selectedItem.id as string);
    }
  };

  const handleDelete = async (id: string) => {
    await fetch(`${BASE_URL}${path.barstuff}/${id}`, {
      method: 'DELETE',
    });
    const updatedProducts = allProducts.filter((product) => product.id !== id);
    dispatch(setAllProducts(updatedProducts));
    setProductForm(initialState);
    setSelectedItem(null);
  };

  return (
    <Container sx={containerStyle}>
      <form className="admin__form" onSubmit={handleSubmit}>
        <div className="admin__form--container">
          <div className="admin__form--content">
            <div className="admin__form--group">
              <div className="admin__form--control">
                <label htmlFor="class">Class</label>
                <input
                  type="text"
                  name="class"
                  id="class"
                  onChange={handleInputChange}
                  value={productForm.class || (selectedItem && selectedItem.class) || ''}
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  onChange={handleInputChange}
                  value={
                    productForm.description || (selectedItem && selectedItem.description) || ''
                  }
                  id="description"
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  name="image"
                  onChange={handleInputChange}
                  value={productForm.image || (selectedItem && selectedItem.image) || ''}
                  id="image"
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="isPromo">Promo</label>
                <select
                  className="dropdown"
                  onChange={handlePromoChange}
                  name="isPromo"
                  id="isPromo"
                  defaultValue={`${
                    productForm.isPromo
                      ? 'yes'
                      : 'no' || (selectedItem && selectedItem.isPromo)
                      ? 'yes'
                      : 'no'
                  }`}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="admin__form--control">
                <label htmlFor="material">Material</label>
                <input
                  type="text"
                  name="material"
                  id="material"
                  onChange={handleInputChange}
                  value={productForm.material || (selectedItem && selectedItem.material) || ''}
                />
              </div>
            </div>
            <div className="admin__form--group">
              <div className="admin__form--control">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleInputChange}
                  value={productForm.name || (selectedItem && selectedItem.name) || ''}
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  onChange={handleInputChange}
                  value={productForm.price || (selectedItem && selectedItem.price) || 0}
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="quantity">Qty</label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  onChange={handleInputChange}
                  value={productForm.quantity || (selectedItem && selectedItem.quantity) || 0}
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="type">Type</label>
                <select
                  className="dropdown"
                  name="type"
                  id="type"
                  onChange={handleTypeChange}
                  value={productForm.type || (selectedItem && selectedItem.type) || ''}
                >
                  <option value="barware">Barware</option>
                  <option value="machine">Machine</option>
                  <option value="glass">Glass</option>
                  <option value="book">Book</option>
                  <option value="set">Set</option>
                  <option value="knives">Knives</option>
                  <option value="knives">Jiggers</option>
                </select>
              </div>
              <div className="admin__form--control">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  onChange={handleInputChange}
                  value={productForm.author || (selectedItem && selectedItem.author) || ''}
                />
              </div>
            </div>
          </div>
          <div className="admin__form--action">
            <button type="submit" className="save">
              {!selectedItem ? 'Add Product' : 'Edit Product'}
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" className="delete" onClick={removeProduct}>
              Delete
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default AdminForm;
