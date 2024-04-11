import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { propChangeHandler } from "../../utils/utilityFunctions";
import { ShopItemType } from "../shop/shop-reducer";

export type CartItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};
export type ChangeQuantityOperationType = "increase" | "decrease";

export type CartStateType = {
  cartItems: CartItemType[];
  isCartOpen: boolean;
};

const initialState: CartStateType = {
  cartItems: [],
  isCartOpen: false,
};

const addItemToCartHandler = (
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

const removeItemFromCartHandler = (cartItems: CartItemType[], id: number) => {
  return cartItems.filter((cartItem) => cartItem.id !== id);
};

const changeCartItemQuantityHandler = (
  cartItems: CartItemType[],
  cartItem: CartItemType,
  operation: ChangeQuantityOperationType,
) => {
  if (cartItem.quantity === 1 && operation === "decrease") {
    return cartItems;
  } else {
    return propChangeHandler(
      cartItems,
      cartItem.id,
      "quantity",
      operation === "increase" ? cartItem.quantity + 1 : cartItem.quantity - 1,
    );
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<ShopItemType>) => {
      state.cartItems = addItemToCartHandler(state.cartItems, action.payload);
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.cartItems = removeItemFromCartHandler(
        state.cartItems,
        action.payload,
      );
    },
    changeCartItemQuantity: (
      state,
      action: PayloadAction<{
        cartItem: CartItemType;
        operation: ChangeQuantityOperationType;
      }>,
    ) => {
      state.cartItems = changeCartItemQuantityHandler(
        state.cartItems,
        action.payload.cartItem,
        action.payload.operation,
      );
    },
    toggleIsCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const {
  addCartItem: addCartItemAC,
  removeCartItem: removeCartItemAC,
  changeCartItemQuantity: changeCartItemQuantityAC,
  toggleIsCartOpen: toggleIsCartOpenAC,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
