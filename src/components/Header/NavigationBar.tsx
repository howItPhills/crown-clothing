import { Cart } from "../Cart/Cart";
import { BurgerMenu } from "./BurgerMenu";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const NavigationBar = () => {
  return (
    <div className="flex w-full items-center justify-between bg-slate-600 p-2 lg:px-6">
      <Logo />
      <div className="flex items-center justify-center gap-4">
        <div className="hidden sm:flex">
          <Navigation className="flex gap-10 uppercase" />
        </div>
        <Cart />
        <div className="sm:hidden">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};
