import { useDispatch } from "react-redux";
import { CartItemType } from "./cart-reducer";
import { ShopItemType } from "../../contexts/ShopContext";
import {
  ChangeQuantityOperationType,
  addCartItemAC,
  changeCartItemQuantityAC,
  removeCartItemAC,
  toggleIsCartOpenAC,
} from "./cart-slice";

type CartStateUpdaterType = {
  addItemToCart: (shopItem: ShopItemType) => void;
  removeItemFromCart: (id: number) => void;
  changeCartItemQuantity: (
    cartItem: CartItemType,
    operation: ChangeQuantityOperationType,
  ) => void;
  toggleIsCartOpen: (newCartIsOpen: boolean) => void;
};

export const useCartStateUpdater = () => {
  const dispatch = useDispatch();

  const addItemToCart = (shopItem: ShopItemType) => {
    dispatch(addCartItemAC(shopItem));
  };

  const removeItemFromCart = (id: number) => {
    dispatch(removeCartItemAC(id));
  };

  const changeCartItemQuantity = (
    cartItem: CartItemType,
    operation: ChangeQuantityOperationType,
  ) => {
    dispatch(changeCartItemQuantityAC({ cartItem, operation }));
  };

  const toggleIsCartOpen = (newIsCartOpen: boolean) => {
    dispatch(toggleIsCartOpenAC(newIsCartOpen));
  };

  const cartStateUpdater: CartStateUpdaterType = {
    addItemToCart,
    removeItemFromCart,
    changeCartItemQuantity,
    toggleIsCartOpen,
  };

  return cartStateUpdater;
};
