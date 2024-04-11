import {
  CartItemType,
  CartStateType,
  UpdateCartItemsPayloadType,
} from "../contexts/CartContext";
import { ShopItemType } from "../contexts/ShopContext";
import { propChangeHandler } from "../utils/utilityFunctions";

const UPDATE_CART_ITEMS = "UPDATE_CART_ITEMS";
const TOGGLE_IS_CART_OPEN = "TOGGLE_IS_CART_OPEN";

type UpdateCartItemsActionType = {
  type: typeof UPDATE_CART_ITEMS;
  payload: UpdateCartItemsPayloadType;
};

type ToggleIsCartOpenType = {
  type: typeof TOGGLE_IS_CART_OPEN;
};

export type ActionUnionType = UpdateCartItemsActionType | ToggleIsCartOpenType;

export const addItemToCart = (
  cartItems: CartItemType[],
  shopItem: ShopItemType,
): CartItemType[] => {
  const findTheSameItem = cartItems.find(
    (cartItem) => cartItem.id === shopItem.id,
  );
  if (findTheSameItem) {
    return propChangeHandler(
      cartItems,
      findTheSameItem.id,
      "quantity",
      findTheSameItem.quantity + 1,
    );
  } else {
    return [{ ...shopItem, quantity: 1 }, ...cartItems];
  }
};

export const removeItemFromCart = (cartItems: CartItemType[], id: number) => {
  return cartItems.filter((cartItem) => cartItem.id !== id);
};

export const changeCartItemQuantity = (
  cartItems: CartItemType[],
  cartItem: CartItemType,
  operation: "increase" | "decrease",
) => {
  if (cartItem.quantity === 1 && operation === "decrease") {
    return cartItems.filter((item) => item.id !== cartItem.id);
  } else {
    return propChangeHandler(
      cartItems,
      cartItem.id,
      "quantity",
      operation === "increase" ? cartItem.quantity + 1 : cartItem.quantity - 1,
    );
  }
};

//REDUCER
export const cartReducer = (
  state: CartStateType,
  action: ActionUnionType,
): CartStateType => {
  const { type } = action;
  switch (type) {
    case UPDATE_CART_ITEMS: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    }
    case TOGGLE_IS_CART_OPEN: {
      return { ...state, isCartOpen: !state.isCartOpen };
    }
    default:
      return state;
  }
};

export const updateCartItemsAC = (
  payload: UpdateCartItemsPayloadType,
): UpdateCartItemsActionType => {
  return {
    type: UPDATE_CART_ITEMS,
    payload,
  };
};

export const toggleIsCartOpenAC = (): ToggleIsCartOpenType => {
  return {
    type: TOGGLE_IS_CART_OPEN,
  };
};
