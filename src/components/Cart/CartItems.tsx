import { CartItemType } from "../../contexts/CartContext";
import { CartItem } from "./CartItem";

type CartItemsPropsType = {
  cartItems: CartItemType[];
};

export const CartItems = ({ cartItems }: CartItemsPropsType) => {
  return (
    <div className="flex flex-col gap-2">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};
