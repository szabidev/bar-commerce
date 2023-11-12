import { Paper } from '@mui/material';
import { styled } from '@mui/material';

const StyledPaper = styled(Paper)({
  width: '100%',
  padding: '20px',
});

const AdminProductCard = () => {
  return (
    <StyledPaper elevation={3}>
      <div className="product__container">
        <div className="product__info">
          <div className="product__info--item">
            <p className="product">Name</p>
            <p className="product__input">Shaker</p>
          </div>
          <div className="product__info--item">
            <p className="product">Author</p>
            <p className="product__input"> - </p>
          </div>
          <div className="product__info--item">
            <p className="product">Material</p>
            <p className="product__input">Steel</p>
          </div>
          <div className="product__info--item">
            <p className="product">Class</p>
            <p className="product__input">shaker</p>
          </div>
          <div className="product__info--item">
            <p className="product">Type</p>
            <p className="product__input">barware</p>
          </div>
          <div className="product__info--item">
            <p className="product">Description</p>
            <p className="product__input">
              Very nice steel cheap profi shaker for the bartender in you. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Inventore, corrupti!
            </p>
          </div>
          <div className="product__info--item">
            <p className="product">Price</p>
            <p className="product__input">29USD / EUR</p>
          </div>
          <div className="product__info--item">
            <p className="product">Qty</p>
            <p className="product__input">34</p>
          </div>
          <div className="product__info--item">
            <p className="product">Promo</p>
            <p className="product__input">true</p>
          </div>
          <div className="product__info--item">
            <p className="product">Image</p>
            <p className="product__input">www.thisaddress.com</p>
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
