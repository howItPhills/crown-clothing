import { NavLink } from "react-router-dom";
import { CategoryType } from "./CategoriesMenu";

type CategoryPropsType = {
  category: CategoryType;
};

export const Category = ({
  category: { imageUrl, title, inFront },
}: CategoryPropsType) => {
  return (
    <div
      className={`${inFront ? "xl:w-1/2" : "xl:w-1/3"} group relative w-full overflow-hidden p-20 text-center`}
    >
      <div
        className={`absolute left-0 top-0 size-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110`}
        style={{ backgroundImage: `url(${imageUrl})` }} //CATEGORY IMAGE
      />
      <div
        className={`${inFront ? "xl:w-1/2" : "xl:w-full"} m-auto flex w-auto flex-col items-center bg-slate-200 p-5 opacity-70 transition-opacity hover:opacity-95 sm:w-1/2`}
      >
        <h3 className="mb-3 select-none text-xl font-bold text-slate-800">
          {title}
        </h3>
        <NavLink
          to={`/shop/${title}`}
          className="bg-slate-500 px-2 py-1 uppercase text-slate-100 transition-transform hover:scale-105"
        >
          shop now
        </NavLink>
      </div>
    </div>
  );
};
