import {
  useIsLoading,
  useShopItemsMap,
} from "../../../store/shop/shop-selector-hooks";
import { Preloader } from "../../reusable/Preloader";
import { CategoryPreview } from "./CategoryPreview";

export const CategoriesPreview = () => {
  const shopItemsMap = useShopItemsMap();
  const isLoading = useIsLoading();

  if (isLoading) return <Preloader />;
  return (
    <div className="flex flex-col gap-10 px-2 py-8 lg:px-10 xl:w-3/4 2xl:w-2/3">
      {Object.keys(shopItemsMap).map((categoryTitle) => (
        <CategoryPreview
          key={categoryTitle}
          categoryTitle={categoryTitle}
          shopItems={shopItemsMap[categoryTitle]}
        />
      ))}
    </div>
  );
};
