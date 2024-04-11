import { useDispatch } from "react-redux";
import { ShopDispatchType, fetchShopItemsThunkCreator } from "./shop-slice";

type ShopStateUpdaterType = {
  fetchShopItems: () => void;
};

export const useShopStateUpdater = () => {
  const dispatch: ShopDispatchType = useDispatch();

  const fetchShopItems = () => {
    dispatch(fetchShopItemsThunkCreator());
  };

  const shopStateUpdater: ShopStateUpdaterType = {
    fetchShopItems,
  };

  return shopStateUpdater;
};
