import { PropsWithChildren, createContext, useReducer } from "react";
import {
  addItemToCart,
  cartReducer,
  changeCartItemQuantity,
  removeItemFromCart,
  toggleIsCartOpenAC,
  updateCartItemsAC,
} from "../reducers/cartReducer";
import { ShopItemType } from "./ShopContext";

export type CartItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

export type CartStateType = {
  cartItems: CartItemType[];
  totalQuantity: number;
  totalPrice: number;
  isCartOpen: boolean;
};

export type UpdateCartItemsPayloadType = {
  cartItems: CartItemType[];
  totalQuantity: number;
  totalPrice: number;
};

export type CartContextValueType = CartStateType;

export type CartContextUpdaterType = {
  addItemToCartHandler: (shopItem: ShopItemType) => void;
  changeItemQuantityHandler: (
    cartItem: CartItemType,
    operation: "increase" | "decrease",
  ) => void;
  removeItemFromCartHandler: (id: number) => void;
  toggleIsCartOpen: () => void;
};

export const CartContextValue = createContext<CartContextValueType | null>(
  null,
);
export const CartContextUpdater = createContext<CartContextUpdaterType | null>(
  null,
);

const initialState: CartStateType = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
  isCartOpen: false,
};

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = (shopItem: ShopItemType) => {
    const newCartItems = addItemToCart(cartState.cartItems, shopItem);
    setNewCartItems(newCartItems);
  };

  const changeItemQuantityHandler = (
    cartItem: CartItemType,
    operation: "increase" | "decrease",
  ) => {
    const newCartItems = changeCartItemQuantity(
      cartState.cartItems,
      cartItem,
      operation,
    );
    setNewCartItems(newCartItems);
  };

  const removeItemFromCartHandler = (id: number) => {
    const newCartItems = removeItemFromCart(cartState.cartItems, id);
    setNewCartItems(newCartItems);
  };

  const setNewCartItems = (newCartItems: CartItemType[]) => {
    const newTotalQuantity = newCartItems.reduce((acc, currItem) => {
      acc += currItem.quantity;
      return acc;
    }, 0);

    const newTotalPrice = newCartItems.reduce((acc, currItem) => {
      acc += currItem.price * currItem.quantity;
      return acc;
    }, 0);

    const payload: UpdateCartItemsPayloadType = {
      cartItems: newCartItems,
      totalQuantity: newTotalQuantity,
      totalPrice: newTotalPrice,
    };

    dispatch(updateCartItemsAC(payload));
  };

  const toggleIsCartOpen = () => dispatch(toggleIsCartOpenAC());

  const contextUpdaterValue: CartContextUpdaterType = {
    addItemToCartHandler,
    changeItemQuantityHandler,
    removeItemFromCartHandler,
    toggleIsCartOpen,
  };

  return (
    <CartContextUpdater.Provider value={contextUpdaterValue}>
      <CartContextValue.Provider value={cartState}>
        {children}
      </CartContextValue.Provider>
    </CartContextUpdater.Provider>
  );
};
