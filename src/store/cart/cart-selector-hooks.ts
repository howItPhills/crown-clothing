import { useSelector } from "react-redux";
import { RootStateType } from "../store";
import { CartItemType } from "../../contexts/CartContext";
import { createSelector } from "reselect";

const selectCartState = (state: RootStateType) => state.cart;

const selectCartItems = createSelector(
  selectCartState,
  (cartState) => cartState.cartItems,
);

const selectIsCartOpen = createSelector(
  selectCartState,
  (cartState) => cartState.isCartOpen,
);

const selectTotalQuantity = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((acc, currItem) => {
    acc += currItem.quantity;
    return acc;
  }, 0),
);

const selectTotalPrice = createSelector(selectCartItems, (cartItems) =>
  cartItems.reduce((acc, currItem) => {
    acc += currItem.price * currItem.quantity;
    return acc;
  }, 0),
);

export const useCartItems = () =>
  useSelector<RootStateType, CartItemType[]>(selectCartItems);

export const useIsCartOpen = () =>
  useSelector<RootStateType, boolean>(selectIsCartOpen);

export const useTotalQuantity = () =>
  useSelector<RootStateType, number>(selectTotalQuantity);

export const useTotalPrice = () =>
  useSelector<RootStateType, number>(selectTotalPrice);
