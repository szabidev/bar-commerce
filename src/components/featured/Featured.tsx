import FeaturedCard from '../card/FeaturedCard.tsx';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ShopItem } from '../../types/products.js';
import Grid from '@mui/material/Grid';
import './Featured.scss';

const Featured = () => {
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

  return (
    <div className="featured__container">
      <div className="featured__title">Featured Barware</div>
      <Grid columns={10} container spacing={2}>
        {randomItems.map((randomItem) => (
          <Grid key={randomItem.id} item xs={10} sm={6} md={4} lg={2}>
            <FeaturedCard
              title={randomItem.name}
              image={randomItem.image}
              description={randomItem.material}
              price={randomItem.price}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Featured;
