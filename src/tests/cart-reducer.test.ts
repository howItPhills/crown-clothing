import { CartItemType } from "../contexts/CartContext";
import {
  addItemToCartAC,
  cartReducer,
  changeCartItemQuantityAC,
  removeItemFromCartAC,
} from "../reducers/cartReducer";
import { ShopItemType } from "../shop-data";
import { test, expect } from "vitest";

test("one item should be added to the cart", () => {
  const startState: CartItemType[] = [];
  const shopItem: ShopItemType = {
    id: 1,
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 25,
  };

  const endState = cartReducer(startState, addItemToCartAC(shopItem));

  expect(endState.length).toBe(1);
  expect(endState[0].name).toBe("Brown Brim");
});

test("one item should be removed from the cart", () => {
  const startState: CartItemType[] = [
    {
      id: 1,
      name: "Brown Brim",
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      price: 25,
      quantity: 1,
    },
  ];

  const endState = cartReducer(
    startState,
    removeItemFromCartAC(startState[0].id),
  );

  expect(endState.length).toBe(0);
});

test("item's quantity should be changed correctly", () => {
  const id = 1;
  const quantity = 1;
  const operation = "increase";

  const startState: CartItemType[] = [
    {
      id,
      name: "Brown Brim",
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      price: 25,
      quantity,
    },
  ];

  const endState = cartReducer(
    startState,
    changeCartItemQuantityAC(id, quantity, operation),
  );

  expect(endState[0].quantity).toBe(2);
});
