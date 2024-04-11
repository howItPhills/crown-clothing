import { CartIcon } from "./CartIcon";
import { CartDropdown } from "./CartDropdown";

export const Cart = () => {
  return (
    <div className="relative">
      <CartIcon />
      <CartDropdown />
    </div>
  );
};
