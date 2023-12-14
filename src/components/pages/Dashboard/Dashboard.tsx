import { Paper, Grid } from '@mui/material';

import PromoField from '../../promo/PromoField/PromoField';
import Featured from '../../featured/Featured';
import PromotionCard from '../../card/PromotionCard';

import { routes } from '../../../app-router';

const Dashboard = () => {
  const highlighted = [
    {
      image: '/img/promotion1_background.jpg',
      description: 'Exquisite jiggers, the basics of every bartenders kit',
      title: 'Premium Jiggers',
      route: routes.JIGGERS,
    },
    {
      title: 'Premium Knives',
      image: '/img/promotion2_background.jpg',
      description: 'Premium chef-quality cutlery to the bar',
      route: routes.KNIVES,
    },
  ];

  return (
    <div>
      <PromoField />
      <Featured />
      <Grid container spacing={2} sx={{ marginTop: '30px', marginBottom: '50px' }}>
        {highlighted.map((promotion) => (
          <Grid
            key={promotion.title}
            item
            xs={12}
            sm={6}
            lg={6}
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
          >
            <Paper>
              <PromotionCard
                key={promotion.title}
                title={promotion.title}
                image={promotion.image}
                description={promotion.description}
                route={promotion.route}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
