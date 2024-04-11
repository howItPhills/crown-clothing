import { DeleteIcon } from "./DeleteIcon";
import { useCartStateUpdater } from "../../store/cart/cart-dispatch-hook";

export const DeleteCartItemIcon = ({ id }: { id: number }) => {
  const { removeItemFromCart } = useCartStateUpdater();

  const removeCartItemHandler = () => {
    removeItemFromCart(id);
  };

  return <DeleteIcon removeFunction={removeCartItemHandler} />;
};
