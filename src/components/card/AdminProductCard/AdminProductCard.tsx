import { FC } from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/material';
import { ShopItem } from '../../../types/products';

const StyledPaper = styled(Paper)({
  width: '100%',
  padding: '20px',
});

interface AdminProductCardProps {
  lastAdded: ShopItem;
  selectedItem: ShopItem;
}

const AdminProductCard: FC<AdminProductCardProps> = ({ lastAdded, selectedItem }) => {
  return (
    <StyledPaper elevation={3}>
      <div className="product__container">
        <div className="product__info">
          <div className="product__info--item">
            <p className="product">Name</p>
            <p className="product__input">{lastAdded.name || selectedItem.name}</p>
          </div>
          <div className="product__info--item">
            <p className="product">Author</p>
            <p className="product__input">
              {lastAdded.author
                ? lastAdded.author
                : '-' || selectedItem.author
                ? selectedItem.author
                : ''}
            </p>
          </div>
          <div className="product__info--item">
            <p className="product">Material</p>
            <p className="product__input">{lastAdded.material || selectedItem.material}</p>
          </div>
          <div className="product__info--item">
            <p className="product">Class</p>
            <p className="product__input">{lastAdded.class || selectedItem.class}</p>
          </div>
          <div className="product__info--item">
            <p className="product">Type</p>
            <p className="product__input">{lastAdded.type || selectedItem.type}</p>
          </div>
          <div className="product__info--item">
            <p className="product">Description</p>
            <p className="product__input">{lastAdded.description || selectedItem.description}</p>
          </div>
          <div className="product__info--item">
            <p className="product">Price</p>
            <p className="product__input">${lastAdded.price || selectedItem.price}</p>
          </div>
          <div className="product__info--item">
            <p className="product">Qty</p>
            <p className="product__input">{lastAdded.quantity || selectedItem.quantity}</p>
          </div>
          <div className="product__info--item">
            <p className="product">Promo</p>
            <p className="product__input">
              {lastAdded.isPromo ? 'Yes' : 'No' || selectedItem.isPromo ? 'Yes' : 'No'}
            </p>
          </div>
          <div className="product__info--item">
            <p className="product">Image</p>
            <p className="product__input">{lastAdded.image || selectedItem.image}</p>
          </div>
        </div>
      </div>
      <div className="product__action">
        <button type="button" className="edit">
          Edit Product
        </button>
        <button type="button" className="delete">
          Delete Product
        </button>
      </div>
    </StyledPaper>
  );
};

export default AdminProductCard;
