import { ShopItemType } from "../../contexts/ShopContext";
import { CartItemType } from "./cart-reducer";

// ACTION.TYPE
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const CHANGE_CART_ITEM_QUANTITY = "CHANGE_CART_ITEM_QUANTITY";
export const TOGGLE_IS_CART_OPEN = "TOGGLE_IS_CART_OPEN";

// ACTION TYPES
type AddItemToCartActionType = {
  type: typeof ADD_ITEM_TO_CART;
  payload: ShopItemType;
};

type RemoveItemFromCartActionType = {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: number;
};

type ChangeCartItemQuantityActionType = {
  type: typeof CHANGE_CART_ITEM_QUANTITY;
  payload: {
    cartItem: CartItemType;
    operation: ChangeQuantityOperationType;
  };
};

type ToggleIsCartOpenActionType = {
  type: typeof TOGGLE_IS_CART_OPEN;
  payload: boolean;
};

export type ActionUnionType =
  | AddItemToCartActionType
  | RemoveItemFromCartActionType
  | ChangeCartItemQuantityActionType
  | ToggleIsCartOpenActionType;

//ACTION CREATORS
export const addItemToCartAC = (
  shopItem: ShopItemType,
): AddItemToCartActionType => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: shopItem,
  };
};

export const removeItemFromCartAC = (
  id: number,
): RemoveItemFromCartActionType => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: id,
  };
};

export const changeCartItemQuantityAC = (
  cartItem: CartItemType,
  operation: "increase" | "decrease",
): ChangeCartItemQuantityActionType => {
  return {
    type: CHANGE_CART_ITEM_QUANTITY,
    payload: {
      cartItem,
      operation,
    },
  };
};

export const toggleIsCartOpenAC = (
  newIsCartOpen: boolean,
): ToggleIsCartOpenActionType => {
  return {
    type: TOGGLE_IS_CART_OPEN,
    payload: newIsCartOpen,
  };
};
