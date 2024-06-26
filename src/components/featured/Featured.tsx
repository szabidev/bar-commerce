import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import FeaturedCard from '../card/FeaturedCard/FeaturedCard';

import { useAppSelector } from '../../hooks/useAppSelector';
import { ShopItem } from '../../types/products';
import './Featured.scss';
import { path } from '../../shared/ts/variables';

const Featured = () => {
  const navigate = useNavigate();
  const store = useAppSelector((state) => state.productsDetail);
  const { products } = store;
  const { allProducts } = products;
  const pickRandomItems = (arr: ShopItem[], num: number) => {
    return arr
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
  };
  const randomItems = pickRandomItems(allProducts, 5);

  const handleNavigate = (id: string | number) => {
    const selectedProduct = randomItems.find((product: ShopItem) => product.id === id);

    if (selectedProduct) {
      navigate(`${path.barstuff}/${id}`, { state: { product: selectedProduct } });
    } else {
      // Handle error or not found scenario
    }
  };

  return (
    <div className="featured__container">
      <div className="featured__title">Featured Barware</div>
      <Grid columns={10} container spacing={2}>
        {randomItems.map((randomItem) => (
          <Grid key={randomItem.id} item xs={10} sm={6} md={4} lg={2}>
            <FeaturedCard product={randomItem} onClick={() => handleNavigate(randomItem.id!)} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Featured;
