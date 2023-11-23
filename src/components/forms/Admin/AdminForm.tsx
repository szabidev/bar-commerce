import { FormEvent, useState, FC } from 'react';
import { v4 as uuid } from 'uuid';

import { ImageList, ImageListItem, Paper } from '@mui/material';
import Container from '@mui/material/Container';

import { ShopItem } from '../../../types/products';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addProduct, lastProductAdded, setAllProducts } from '../../../store';

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

const AdminForm: FC<{ selectedItem: ShopItem; setIsDeleting: (x: boolean) => void }> = ({
  selectedItem,
  setIsDeleting,
}) => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.productsDetail.products);
  const { allProducts } = store;
  const [productForm, setProductForm] = useState(initialState);
  console.log(productForm);

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

  const submitHandler = async (product: ShopItem) => {
    // error handling
    await fetch('https://bar-commerce-default-rtdb.firebaseio.com/items.json', {
      method: 'POST',
      body: JSON.stringify(product),
    });
    dispatch(addProduct(product));
    dispatch(setAllProducts([...allProducts, product]));
    dispatch(lastProductAdded(product));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
  };

  const handleCancel = () => {
    setProductForm(initialState);
  };

  const removeProduct = () => {
    if (selectedItem) {
      handleDelete(selectedItem.id as string | number);
    }
    setProductForm(initialState);
    setIsDeleting(true);
  };

  const handleDelete = async (id: string | number) => {
    await fetch(`https://bar-commerce-default-rtdb.firebaseio.com/items/${id}.json`, {
      method: 'DELETE',
    });
  };

  const containerStyle = {
    margin: '0',
    padding: 0,
    width: 'auto',
    minHeight: '700px',
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
                  value={productForm.class || selectedItem.class}
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  onChange={handleInputChange}
                  value={productForm.description || selectedItem.description}
                  id="description"
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  name="image"
                  onChange={handleInputChange}
                  value={productForm.image || selectedItem.image}
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
                    productForm.isPromo ? 'yes' : 'no' || selectedItem.isPromo ? 'yes' : 'no'
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
                  value={productForm.material || selectedItem.material}
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
                  value={productForm.name || selectedItem.name}
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  onChange={handleInputChange}
                  value={productForm.price || selectedItem.price}
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="quantity">Qty</label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  onChange={handleInputChange}
                  value={productForm.quantity || selectedItem.quantity}
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  onChange={handleInputChange}
                  value={productForm.type || selectedItem.type}
                />
              </div>
              <div className="admin__form--control">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  onChange={handleInputChange}
                  value={productForm.author || selectedItem.author}
                />
              </div>
            </div>
          </div>
          <div className="admin__form--action">
            <button type="submit" className="save">
              Add Product
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" className="delete" onClick={removeProduct}>
              Delete
            </button>
          </div>

          <div className="image__container">
            {productForm.image ||
              (selectedItem.image && (
                <Paper
                  elevation={3}
                  sx={{
                    padding: '20px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  <ImageList cols={1}>
                    <ImageListItem>
                      <img
                        src={productForm.image || selectedItem.image}
                        alt={productForm.name || selectedItem.name}
                      />
                      <h3>{productForm.name || selectedItem.name}</h3>
                      <p>
                        {productForm.type === 'book'
                          ? productForm.author || selectedItem.author
                          : productForm.material || selectedItem.material}
                      </p>
                    </ImageListItem>
                  </ImageList>
                </Paper>
              ))}
          </div>
        </div>
      </form>
    </Container>
  );
};

export default AdminForm;
