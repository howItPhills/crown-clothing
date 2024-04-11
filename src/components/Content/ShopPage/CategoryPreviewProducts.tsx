import { ShopItemType } from "../../../contexts/ShopContext";
import { Product } from "./Product";

type CategoryPreviewProductsPropsType = {
  shopItems: ShopItemType[];
};

export const CategoryPreviewProducts = ({
  shopItems,
}: CategoryPreviewProductsPropsType) => {
  return (
    <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
      {shopItems
        .filter((_, i) => i < 4)
        .map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
};
