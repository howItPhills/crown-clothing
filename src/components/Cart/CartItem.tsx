import { CartItemType } from "../../contexts/CartContext";
import { DeleteCartItemIcon } from "../reusable/DeleteCartItem";
import { QuantityChangeHandler } from "../reusable/QuantityChangeHandler";

type CartItemPropsType = {
  cartItem: CartItemType;
};

export const CartItem = ({ cartItem }: CartItemPropsType) => {
  return (
    <div className="grid grid-cols-3 items-center gap-2 border border-slate-400 p-1 shadow-sm">
      <img
        src={cartItem.imageUrl}
        alt="cart-item-photo"
        className="h-24 w-full"
      />
      <div className="flex flex-col text-sm">
        <span>{cartItem.name}</span>
        <span>{cartItem.price} $</span>
      </div>
      <div className="flex gap-1.5">
        <QuantityChangeHandler cartItem={cartItem} />
        <DeleteCartItemIcon id={cartItem.id} />
      </div>
    </div>
  );
};
