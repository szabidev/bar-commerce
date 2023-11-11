import { FC } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface PromotionCardProps {
  title: string;
  image: string;
  description: string;
}

const cardStyle = {
  width: 634,
  height: 700,
  border: '2px solid black',
};

const PromotionCard: FC<PromotionCardProps> = ({ title, image, description }) => {
  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        height="500"
        image={image}
        alt="highlighted item"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textTransform: 'uppercase', fontSize: 20, fontWeight: 'bold', letterSpacing: 1 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.75)' }}>
          {description}
        </Typography>
        <CardActions sx={{ padding: '20px 0' }}>
          <Button>
            <p className="cta__text">Shop Now</p>
            <ArrowForwardIcon sx={{ color: '#020912' }} />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PromotionCard;
