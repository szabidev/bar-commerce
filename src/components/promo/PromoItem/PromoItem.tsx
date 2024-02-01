import { useNavigate } from 'react-router-dom';

interface PromoItemProps {
  background: string;
  promotionTitle: string;
  promotionDescription: string;
  route: string;
}

const PromoItem = ({ background, route, promotionDescription, promotionTitle }: PromoItemProps) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(route);
  };
  return (
    <div className="promo__container">
      <div className="background__image">
        <img src={background} alt="promotional" />
      </div>
      <div className="promo__action">
        <h2>{promotionTitle}</h2>
        <p>{promotionDescription}</p>
        <button onClick={handleRedirect}>Shop Now</button>
      </div>
    </div>
  );
};

export default PromoItem;
