import { useState } from "react";
import { Navigation } from "./Navigation";
import { CrossIcon } from "../reusable/CrossIcon";

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickHandler = () => setIsMenuOpen(false);

  return (
    <div className="relative">
      <img
        src="images/burger-bar.png"
        className="size-6 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div
        className={`${isMenuOpen ? "w-[100px]" : "w-0 border-none"} transition-width absolute -right-2 -top-2 z-10 flex h-[180px] justify-center bg-slate-600 duration-300`}
      >
        <div
          className={`${!isMenuOpen && "hidden"} flex w-full flex-col gap-3 p-2`}
        >
          <CrossIcon onClick={onClickHandler} className="self-end" />
          <Navigation
            className={`flex h-full flex-col items-center justify-center gap-5 transition-opacity`}
          />
        </div>
      </div>
    </div>
  );
};
