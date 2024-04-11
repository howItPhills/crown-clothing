import { DocumentData } from "firebase/firestore";
import {
  FETCH_SHOP_ITEMS_FAILED,
  FETCH_SHOP_ITEMS_START,
  FETCH_SHOP_ITEMS_SUCCESS,
  UnionActionType,
} from "./shop-actions";

export type ShopItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type ShopStateType = {
  shopCategories: DocumentData[];
  isLoading: boolean;
  error: string;
};

const initialState: ShopStateType = {
  shopCategories: [],
  isLoading: false,
  error: "",
};

export const shopReducer = (
  state = initialState,
  { type, payload }: UnionActionType,
): ShopStateType => {
  switch (type) {
    case FETCH_SHOP_ITEMS_START:
      return { ...state, isLoading: payload };
    case FETCH_SHOP_ITEMS_SUCCESS:
      return { ...state, shopCategories: payload, isLoading: false };
    case FETCH_SHOP_ITEMS_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
