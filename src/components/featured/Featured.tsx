import FeaturedCard from '../card/FeaturedCard.tsx';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ShopItem } from '../../types/products';
import Grid from '@mui/material/Grid';
import './Featured.scss';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, path } from '../../shared/ts/variables';

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

  const navigateToItem = (id: string) => {
    navigate(`${BASE_URL}${path.barstuff}/${id}`);
  };

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
              onClick={() => navigateToItem(randomItem.id as string)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Featured;
