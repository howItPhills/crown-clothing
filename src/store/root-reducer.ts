import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-slice";
import { shopReducer } from "./shop/shop-slice";
import { cartReducer } from "./cart/cart-slice";

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shop: shopReducer,
});
