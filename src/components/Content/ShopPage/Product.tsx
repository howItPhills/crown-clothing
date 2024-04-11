import { ShopItemType } from "../../../contexts/ShopContext";
import { CustomButton } from "../../reusable/CustomButton";
import { useCartStateUpdater } from "../../../store/cart/cart-dispatch-hook";
import { useIsUserLoggedIn } from "../../../store/user/user-selector-hooks";
import { useNavigate } from "react-router-dom";

type ProductPropsType = {
  product: ShopItemType;
};

export const Product = ({ product }: ProductPropsType) => {
  const { addItemToCart } = useCartStateUpdater();
  const isUserLoggedIn = useIsUserLoggedIn();
  const navigate = useNavigate();

  const onClickHandler = () => {
    isUserLoggedIn ? addItemToCart(product) : navigate("/signIn");
  };

  const { id, imageUrl, name, price } = product;
  return (
    <div key={id} className="group relative flex flex-col">
      <img
        src={imageUrl}
        alt={name}
        className="h-[250px] group-hover:opacity-85 lg:h-[340px]"
      />
      <div className="absolute bottom-12 hidden w-auto justify-center self-center transition-transform duration-300 hover:scale-105 group-hover:flex">
        <CustomButton text="Add to cart" onClick={onClickHandler} />
      </div>
      <div className="flex justify-between gap-2">
        <span className="text-left">{name}</span>
        <span>{price} $</span>
      </div>
    </div>
  );
};
