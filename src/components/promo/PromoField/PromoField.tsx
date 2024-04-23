import Carousel from 'react-material-ui-carousel';

import PromoItem from '../PromoItem';
import './PromoField.scss';

import { routes } from '../../../app-router';

const PromoField = () => {
  const promoItemBackground = [
    {
      background: '/img/books_promotion_background.jpg',
      promotionTitle: 'Bartending Books',
      promotionDescription: 'Gain more knowledge, explore the library',
      route: routes.BOOKS,
    },
    {
      background: '/img/glassware_promotion_background.jpg',
      promotionTitle: 'Luxurious glassware',
      promotionDescription: 'Keep your cocktail frosty to the top',
      route: routes.GLASSWARE,
    },
    {
      background: '/img/machines_promotion_background.jpg',
      promotionTitle: 'Premium quality machines',
      promotionDescription: 'Luxurious, indestructible, silent, all that you want',
      route: routes.MACHINE,
    },
    {
      background: '/img/barware_promotion_background.jpg',
      promotionTitle: 'All the fancy barware',
      promotionDescription: 'Jiggers, spoons, shakers, whatever, we got it',
      route: routes.BARWARE,
    },
  ];

  return (
    <div className="carousel__container">
      <Carousel>
        {promoItemBackground.map((promoItem) => (
          <PromoItem
            key={promoItem.promotionTitle}
            background={promoItem.background}
            promotionTitle={promoItem.promotionTitle}
            promotionDescription={promoItem.promotionDescription}
            route={promoItem.route}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default PromoField;
