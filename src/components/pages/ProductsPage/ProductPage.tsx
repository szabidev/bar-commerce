import { useNavigate } from 'react-router-dom';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Paper, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';

import ProductCard from '../../card/ProductCard';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { routes } from '../../../app-router';
import { ShopItem } from '../../../types/products';
import { path } from '../../../shared/ts/variables';

const StyledIcon = styled(ArrowCircleLeftIcon)({
  transition: 'all .2s ease',
  '&:hover': {
    transform: 'scale(1.5)',
  },
  cursor: 'pointer',
});

interface ProductPageProps {
  pageType: string;
  title: string;
}

const ProductPage = ({ pageType, title }: ProductPageProps) => {
  const navigate = useNavigate();
  const store = useAppSelector((state) => state.productsDetail.products);
  const { productsByType } = store;
  const product = productsByType[pageType as keyof typeof productsByType];
  const redirectToDashboard = () => {
    navigate(routes.DASHBOARD);
  };

  const handleNavigate = (id: string | number) => {
    const selectedProduct = productsByType[pageType as keyof typeof productsByType].find(
      (product: ShopItem) => product.id === id,
    );

    if (selectedProduct) {
      navigate(`${path.barstuff}/${id}`, { state: { product: selectedProduct } });
    } else {
      // Handle error or not found scenario
    }
  };

  return (
    <Container>
      <div className="product__content">
        <div className="back">
          <StyledIcon fontSize="large" onClick={redirectToDashboard} />
        </div>
        <h2 className="product__title">{title}</h2>
        <div className="filter"></div>
      </div>
      <Grid
        container
        spacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 8 }}
        sx={{ margin: '50px 0' }}
      >
        {product.length === 0 && (
          <div className="product__error">
            <h1>Oops!</h1>
            <h3>We are out of stock</h3>
            <p>Check back later!</p>
          </div>
        )}
        {product.map((product: ShopItem) => (
          <Grid
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
            item
          >
            <Paper key={product.id} sx={{ padding: 0 }}>
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleNavigate(product.id!)}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;
