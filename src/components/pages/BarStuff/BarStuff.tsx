import { useNavigate } from 'react-router-dom';

import { Grid, Paper } from '@mui/material';

import ProductCard from '../../card/ProductCard';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { ShopItem } from '../../../types/products';
import { path } from '../../../shared/ts/variables';

const BarStuff = () => {
  const navigate = useNavigate();
  const store = useAppSelector((state) => state);
  const { searchTerm } = store.userDetails;
  const { allProducts } = store.productsDetail.products;

  const filteredItems = allProducts.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.material.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleNavigate = (id: string | number) => {
    const selectedProduct = filteredItems.find((product: ShopItem) => product.id === id);

    if (selectedProduct) {
      navigate(`${path.barstuff}/${id}`, { state: { product: selectedProduct } });
    } else {
      // Handle error or not found scenario
    }
  };

  return (
    <div className="barstuff__container">
      <div className="barstuff__content">
        <div className="barstuff__group">
          <h1 className="barstuff__group--title">Products</h1>
          <div className="barstuff__group--products">
            <Grid
              container
              spacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 8 }}
              sx={{ margin: '25px 0 50px 0' }}
            >
              {filteredItems.length === 0 && (
                <div className="barstuff__message">
                  <h2>Sorry, no items found</h2>
                  <p>Try to search for something else</p>
                </div>
              )}
              {filteredItems.map((product: ShopItem) => (
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
          </div>
        </div>
        <div className="barstuff__group">
          <h1 className="barstuff__group--title">Articles</h1>
        </div>
      </div>
    </div>
  );
};

export default BarStuff;
