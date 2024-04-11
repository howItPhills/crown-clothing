import { useContext } from "react";
import {
  ShopContextUpdater,
  ShopContextUpdaterType,
  ShopContextValue,
  ShopMapType,
} from "../contexts/ShopContext";

export const useShopContextValue = () =>
  useContext(ShopContextValue) as ShopMapType;

export const useShopContextUpdater = () =>
  useContext(ShopContextUpdater) as ShopContextUpdaterType;
