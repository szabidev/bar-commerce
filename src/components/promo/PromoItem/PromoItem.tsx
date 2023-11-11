import React, { FC } from 'react';

interface PromoItemProps {
  background: string;
  promotionTitle: string;
  promotionDescription: string;
}

const PromoItem: FC<PromoItemProps> = ({ background, promotionDescription, promotionTitle }) => {
  return (
    <div className="promo__container">
      <div className="background__image">
        <img src={background} alt="promotional" />
      </div>
      <div className="promo__action">
        <h2>{promotionTitle}</h2>
        <p>{promotionDescription}</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default PromoItem;
