import { useAppSelector } from '../../../hooks/useAppSelector';

const CartCounter = () => {
  const store = useAppSelector((state) => state.cartDetail);
  const { totalItems } = store;
  return (
    <div className="cartcounter__container">
      <span className="total">{totalItems}</span>
    </div>
  );
};

export default CartCounter;
