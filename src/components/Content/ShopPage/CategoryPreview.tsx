import { NavLink } from "react-router-dom";
import { ShopItemType } from "../../../contexts/ShopContext";
import { CustomButton } from "../../reusable/CustomButton";
import { CategoryPreviewProducts } from "./CategoryPreviewProducts";

type CategoryPreviewPropsType = {
  categoryTitle: string;
  shopItems: ShopItemType[];
};

export const CategoryPreview = ({
  categoryTitle,
  shopItems,
}: CategoryPreviewPropsType) => {
  return (
    <div className="flex flex-col gap-3">
      <NavLink
        to={`/shop/${categoryTitle}`}
        className="self-start text-2xl uppercase hover:underline"
      >
        {categoryTitle}
      </NavLink>
      <CategoryPreviewProducts shopItems={shopItems} />
      <NavLink to={`/shop/${categoryTitle}`} className="self-end">
        <CustomButton text="see more ..." />
      </NavLink>
    </div>
  );
};
