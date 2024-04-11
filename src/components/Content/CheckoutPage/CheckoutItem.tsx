import { CartItemType } from "../../../contexts/CartContext";
import { DeleteCartItemIcon } from "../../reusable/DeleteCartItem";
import { QuantityChangeHandler } from "../../reusable/QuantityChangeHandler";

type CheckoutItemPropsType = {
  cartItem: CartItemType;
};

export const CheckoutItem = ({ cartItem }: CheckoutItemPropsType) => {
  return (
    <div className="grid w-full grid-cols-5 items-center justify-items-center border-b-2 border-slate-300 p-1 text-center">
      <div className="grid w-full grid-cols-2 items-center gap-2">
        <img src={cartItem.imageUrl} alt="item-photo" className="h-32 w-full" />
        <span className="text-left">{cartItem.name}</span>
      </div>
      <span>{cartItem.price} $</span>
      <div className="w-1/2">
        <QuantityChangeHandler cartItem={cartItem} />
      </div>
      <span>{cartItem.quantity * cartItem.price} $</span>
      <DeleteCartItemIcon id={cartItem.id} />
    </div>
  );
};
