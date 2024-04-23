import { FC } from 'react';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/system';
import { CardProps } from '../../../types/products';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addProductToCart } from '../../../store';

const StyledCard = styled(Card)({
  boxShadow: '0px 0px 23px 2px rgba(0,0,0,0.20)',
});

const ProductCard: FC<CardProps> = ({ product, onClick }) => {
  const dispatch = useAppDispatch();
  const { image, name, material, price } = product;

  const addToCart = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <StyledCard
      sx={{ width: 250, cursor: 'pointer', padding: 0, border: '1px solid #020912' }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
        sx={{ objectFit: 'contain', padding: '10px 0' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: 100, textAlign: 'center' }}
        >
          {name}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 16, textAlign: 'center' }}>
          {material}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 20, textAlign: 'center' }}>
          ${price} USD
        </Typography>
      </CardContent>
      <div className="product__cta">
        <button className="add__to__cart" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
