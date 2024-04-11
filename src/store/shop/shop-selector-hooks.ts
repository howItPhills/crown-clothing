import { useSelector } from "react-redux";
import { RootStateType } from "../store";
import { ShopItemType } from "./shop-reducer";
import { createSelector } from "reselect";

export type ShopMapType = {
  [key: string]: ShopItemType[];
};

const selectShopState = (state: RootStateType) => state.shop;

const selectShopCategories = createSelector(
  selectShopState,
  (shopState) => shopState.shopCategories,
);

const selectIsLoading = createSelector(
  selectShopState,
  (shopState) => shopState.isLoading,
);

const selectShopCategoriesMap = createSelector(
  selectShopCategories,
  (shopCategories) =>
    shopCategories.reduce((acc: ShopMapType, currItem) => {
      const { items, title } = currItem;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {}),
);

export const useShopItemsMap = () =>
  useSelector<RootStateType, ShopMapType>(selectShopCategoriesMap);

export const useCategoryItems = (categoryId: string) =>
  useShopItemsMap()[categoryId];

export const useIsLoading = () =>
  useSelector<RootStateType, boolean>(selectIsLoading);
