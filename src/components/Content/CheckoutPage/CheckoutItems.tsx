import { CheckoutItem } from "./CheckoutItem";
import { useCartItems } from "../../../store/cart/cart-selector-hooks";

export const CheckoutItems = () => {
  const cartItems = useCartItems();

  return (
    <div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};
