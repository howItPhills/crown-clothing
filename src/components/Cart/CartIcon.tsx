import {
  useIsCartOpen,
  useTotalQuantity,
} from "../../store/cart/cart-selector-hooks";
import { useCartStateUpdater } from "../../store/cart/cart-dispatch-hook";
import { useIsUserLoggedIn } from "../../store/user/user-selector-hooks";

export const CartIcon = () => {
  const { toggleIsCartOpen } = useCartStateUpdater();
  const totalQuantity = useTotalQuantity();
  const isCartOpen = useIsCartOpen();
  const isLoggedIn = useIsUserLoggedIn();

  const onClickHandler = () => toggleIsCartOpen(!isCartOpen);

  return (
    <div
      onClick={onClickHandler}
      className={`relative ${isLoggedIn ? "flex" : "hidden"} cursor-pointer items-center justify-center pb-1.5`}
    >
      <img src="/images/bag.png" alt="bag" />
      <span className="absolute top-3 text-xs">{totalQuantity}</span>
    </div>
  );
};
