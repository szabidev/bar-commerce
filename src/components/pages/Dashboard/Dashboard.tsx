import { Paper, Grid } from '@mui/material';
import PromoField from '../../promo/PromoField/PromoField';
import Featured from '../../featured/Featured';
import PromotionCard from '../../card/PromotionCard';
import { styled } from '@mui/system';

const StyledGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Dashboard = () => {
  const highlighted = [
    {
      image: '/img/promotion1_background.jpg',
      description: 'Exquisite jiggers, the basics of every bartenders kit',
      title: 'Premium Jiggers',
    },
    {
      title: 'Premium Knives',
      image: '/img/promotion2_background.jpg',
      description: 'Premium chef-quality cutlery to the bar',
    },
  ];

  return (
    <div>
      <PromoField />
      <Featured />
      <Grid container spacing={2} sx={{ margin: '50px 0' }}>
        {highlighted.map((promotion) => (
          <StyledGrid
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
              />
            </Paper>
          </StyledGrid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
