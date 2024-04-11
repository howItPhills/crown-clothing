import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2 uppercase">
      <div className="flex cursor-pointer rounded-full bg-slate-400 p-2 transition-colors hover:bg-slate-300">
        <NavLink to={"/"}>
          <img src="/images/logo.png" className="size-10" />
        </NavLink>
      </div>
      <span className="select-none">Crown-Clothing</span>
    </div>
  );
};
