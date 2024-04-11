import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <img src="../../images/wrong.png" className="mb-8 size-36" alt="" />
      <span className="mb-3">Oops..., something went wrong</span>
      <NavLink
        to={"/"}
        className="border bg-slate-500 p-3 transition-colors hover:text-slate-100"
      >
        Go home
      </NavLink>
    </div>
  );
};
