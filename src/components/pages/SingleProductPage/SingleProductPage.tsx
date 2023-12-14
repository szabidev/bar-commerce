import { useLocation } from 'react-router-dom';
import Counter from '../../UI/Counter';
import { CardMedia } from '@mui/material';

const SingleProductPage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const { name, material, price, description, image } = product;

  console.log(product);

  return (
    <div className="single__product--container">
      <div className="single__product--content">
        <div className="single__product--image">
          <CardMedia
            component="img"
            height="300"
            width="300"
            image={image}
            alt={name}
            sx={{ objectFit: 'contain' }}
          />
        </div>
        <div className="single__product--info">
          <div className="product__name">{name}</div>
          <p className="product__material">{material}</p>
          <p className="product__price">${price}</p>
          <p className="product__vat">Tax included</p>
          <Counter />
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="suggestions__container">Product Suggestions</div>
    </div>
  );
};

export default SingleProductPage;
