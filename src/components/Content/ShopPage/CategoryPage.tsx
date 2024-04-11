import { useParams } from "react-router-dom";
import { Product } from "./Product";
import {
  useCategoryItems,
  useIsLoading,
} from "../../../store/shop/shop-selector-hooks";
import { Preloader } from "../../reusable/Preloader";

type CategoryPageParams = {
  categoryId: string;
};

export const CategoryPage = () => {
  const { categoryId } = useParams() as CategoryPageParams;
  const shopItems = useCategoryItems(categoryId);
  const isLoading = useIsLoading();

  if (isLoading) return <Preloader />;
  return (
    <div className="w-1/2 py-10 text-center md:w-3/4 xl:w-2/3">
      <h2 className="mb-5 text-center text-2xl uppercase">{categoryId}</h2>
      <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4 ">
        {shopItems?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
