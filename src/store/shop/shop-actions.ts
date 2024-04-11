import { DocumentData } from "firebase/firestore";
import { getCollectionsAndDocuments } from "../../utils/firebase";
import { getErrorMessage } from "../../utils/utilityFunctions";
import { ShopDispatchType } from "./shop-dispatch-hook";

// ACTION.TYPE
export const FETCH_SHOP_ITEMS_START = "FETCH_SHOP_ITEMS_START";
export const FETCH_SHOP_ITEMS_SUCCESS = "FETCH_SHOP_ITEMS_SUCCESS";
export const FETCH_SHOP_ITEMS_FAILED = "FETCH_SHOP_ITEMS_FAILED";

//ACTION CREATORS TYPES
type FetchShopItemsStartActionType = {
  type: typeof FETCH_SHOP_ITEMS_START;
  payload: boolean;
};

type FetchShopItemsSuccessActionType = {
  type: typeof FETCH_SHOP_ITEMS_SUCCESS;
  payload: DocumentData[];
};

type FetchShopItemsFailedActionType = {
  type: typeof FETCH_SHOP_ITEMS_FAILED;
  payload: string;
};

export type UnionActionType =
  | FetchShopItemsStartActionType
  | FetchShopItemsSuccessActionType
  | FetchShopItemsFailedActionType;

const fetchShopItemsStartAC = (
  payload: boolean,
): FetchShopItemsStartActionType => {
  return {
    type: FETCH_SHOP_ITEMS_START,
    payload,
  };
};

const fetchShopItemsSuccessAC = (
  shopItems: DocumentData[],
): FetchShopItemsSuccessActionType => {
  return {
    type: FETCH_SHOP_ITEMS_SUCCESS,
    payload: shopItems,
  };
};

const fetchShopItemsFailedAC = (
  error: string,
): FetchShopItemsFailedActionType => {
  return {
    type: FETCH_SHOP_ITEMS_FAILED,
    payload: error,
  };
};

export const fetchShopItemsThunkCreator =
  () => async (dispatch: ShopDispatchType) => {
    dispatch(fetchShopItemsStartAC(true));
    try {
      const shopCollectionsArr = await getCollectionsAndDocuments();
      dispatch(fetchShopItemsSuccessAC(shopCollectionsArr));
    } catch (error) {
      dispatch(fetchShopItemsFailedAC(getErrorMessage(error)));
    }
  };
