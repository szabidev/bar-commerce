import Carousel from 'react-material-ui-carousel';
import PromoItem from '../PromoItem';
import './PromoField.scss';

const PromoField = () => {
  const promoItemBackground = [
    {
      background: '/img/books_promotion_background.jpg',
      promotionTitle: 'Bartending Books',
      promotionDescription: 'Gain more knowledge, explore the library',
    },
    {
      background: '/img/glassware_promotion_background.jpg',
      promotionTitle: 'Luxurious glassware',
      promotionDescription: 'Keep your cocktail frosty to the top',
    },
    {
      background: '/img/machines_promotion_background.jpg',
      promotionTitle: 'Premium quality machines',
      promotionDescription: 'Luxurious, indestructible, silent, all that you want',
    },
    {
      background: '/img/barware_promotion_background.jpg',
      promotionTitle: 'All the fancy barware',
      promotionDescription: 'Jiggers, spoons, shakers, whatever, we got it',
    },
  ];

  return (
    <div className="carousel__container">
      {/* Check why arrow icons are not rendered */}
      <Carousel>
        {promoItemBackground.map((promoItem) => (
          <PromoItem
            key={promoItem.promotionTitle}
            background={promoItem.background}
            promotionTitle={promoItem.promotionTitle}
            promotionDescription={promoItem.promotionDescription}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default PromoField;
