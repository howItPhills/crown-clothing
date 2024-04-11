import { useTotalPrice } from "../../../store/cart/cart-selector-hooks";

export const TotalPrice = () => {
  const totalPrice = useTotalPrice();

  return (
    <div className="self-end text-xl uppercase">
      <span>total: {totalPrice} $</span>
    </div>
  );
};
