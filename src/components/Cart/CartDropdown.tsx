import { CartItems } from "./CartItems";
import { CustomButton } from "../reusable/CustomButton";
import { NavLink } from "react-router-dom";
import {
  useCartItems,
  useIsCartOpen,
} from "../../store/cart/cart-selector-hooks";
import { useCartStateUpdater } from "../../store/cart/cart-dispatch-hook";
import { CrossIcon } from "../reusable/CrossIcon";

export const CartDropdown = () => {
  const { toggleIsCartOpen } = useCartStateUpdater();

  const cartItems = useCartItems();
  const isCartOpen = useIsCartOpen();

  const onClickHandler = () => toggleIsCartOpen(false);

  return (
    <div
      className={`${isCartOpen ? "h-[300px]" : "h-0 py-0"} absolute right-6 top-9 z-10 flex w-[280px] flex-col items-center gap-2 overflow-y-scroll bg-slate-100 p-3 transition-height duration-200`}
    >
      <CrossIcon onClick={onClickHandler} className="self-end" />
      <span
        className={`${cartItems.length && "hidden"} flex h-full w-full items-center justify-center pb-5 text-slate-600`}
      >
        Your cart is empty...
      </span>
      <div
        className={`flex flex-col ${cartItems.length === 1 && "h-full"} items-center justify-between gap-3`}
      >
        <CartItems cartItems={cartItems} />
        <NavLink
          to={"/checkout"}
          className={`${!cartItems.length && "hidden"}`}
        >
          <CustomButton onClick={onClickHandler} text="Go to checkout" />
        </NavLink>
      </div>
    </div>
  );
};
