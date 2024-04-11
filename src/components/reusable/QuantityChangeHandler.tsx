import NumberChangeHandler from "./NumberChangeHandler";
import { CartItemType } from "../../contexts/CartContext";
import { useCartStateUpdater } from "../../store/cart/cart-dispatch-hook";

type QuantityChangeHandlerPropsType = {
  cartItem: CartItemType;
};

export const QuantityChangeHandler = ({
  cartItem,
}: QuantityChangeHandlerPropsType) => {
  const { changeCartItemQuantity } = useCartStateUpdater();

  const increaseQuantity = () => {
    changeCartItemQuantity(cartItem, "increase");
  };

  const decreaseQuantity = () => {
    changeCartItemQuantity(cartItem, "decrease");
  };

  return (
    <NumberChangeHandler
      number={cartItem.quantity}
      decreaseFunction={decreaseQuantity}
      increaseFunction={increaseQuantity}
    />
  );
};
