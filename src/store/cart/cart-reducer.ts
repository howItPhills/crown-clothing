import { ShopItemType } from "../../contexts/ShopContext";
import { propChangeHandler } from "../../utils/utilityFunctions";
import {
  ADD_ITEM_TO_CART,
  ActionUnionType,
  CHANGE_CART_ITEM_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_IS_CART_OPEN,
} from "./cart-actions";

export type CartItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

export type CartStateType = {
  cartItems: CartItemType[];
  isCartOpen: boolean;
};

//HELPER FUNCTIONS
const addItemToCart = (
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

const removeItemFromCart = (cartItems: CartItemType[], id: number) => {
  return cartItems.filter((cartItem) => cartItem.id !== id);
};

const changeCartItemQuantity = (
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

// INITIAL STATE VALUE
const initialState: CartStateType = {
  cartItems: [],
  isCartOpen: false,
};

//REDUCER
export const cartReduxReducer = (
  currentState: CartStateType = initialState,
  { type, payload }: ActionUnionType,
): CartStateType => {
  switch (type) {
    case ADD_ITEM_TO_CART: {
      const newCartItems = addItemToCart(currentState.cartItems, payload);
      return { ...currentState, cartItems: newCartItems };
    }
    case REMOVE_ITEM_FROM_CART: {
      const newCartItems = removeItemFromCart(currentState.cartItems, payload);
      return { ...currentState, cartItems: newCartItems };
    }
    case CHANGE_CART_ITEM_QUANTITY: {
      const { cartItem, operation } = payload;
      const newCartItems = changeCartItemQuantity(
        currentState.cartItems,
        cartItem,
        operation,
      );
      return { ...currentState, cartItems: newCartItems };
    }
    case TOGGLE_IS_CART_OPEN: {
      return { ...currentState, isCartOpen: payload };
    }
    default:
      return currentState;
  }
};
