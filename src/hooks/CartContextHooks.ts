import { useContext } from "react";
import {
  CartContextUpdater,
  CartContextUpdaterType,
  CartContextValue,
  CartContextValueType,
} from "../contexts/CartContext";

export const useCartContextValue = () =>
  useContext(CartContextValue) as CartContextValueType;

export const useCartContextUpdater = () =>
  useContext(CartContextUpdater) as CartContextUpdaterType;
