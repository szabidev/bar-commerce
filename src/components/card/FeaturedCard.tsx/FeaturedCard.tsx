import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { styled } from '@mui/system';
import { CardProps } from '../../../types/products';

const StyledCard = styled(Card)({
  transition: 'all 0.2s ease-in',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 0px 23px 2px rgba(0,0,0,0.81)',
  },
});

const FeaturedCard: FC<CardProps> = ({ image, title, description, price }) => {
  return (
    <StyledCard sx={{ width: 230, cursor: 'pointer', padding: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: 120, textAlign: 'center' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 16, textAlign: 'center' }}>
          {description}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 20, textAlign: 'center' }}>
          ${price} USD
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default FeaturedCard;
