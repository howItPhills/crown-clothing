import { v1 } from "uuid";
import { Category } from "./Category";

export type CategoryType = {
  id: string;
  title: string;
  imageUrl: string;
  inFront: boolean;
};

export const CategoriesMenu = () => {
  const categories: CategoryType[] = [
    {
      id: v1(),
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      inFront: true,
    },
    {
      id: v1(),
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      inFront: true,
    },
    {
      id: v1(),
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      inFront: false,
    },
    {
      id: v1(),
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      inFront: false,
    },
    {
      id: v1(),
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      inFront: false,
    },
  ];
  return (
    <div className="w-full p-10 uppercase md:w-3/5 lg:flex lg:flex-wrap">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};
