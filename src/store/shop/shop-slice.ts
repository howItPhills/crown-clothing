import {
  PayloadAction,
  ThunkDispatch,
  UnknownAction,
  createSlice,
} from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { getCollectionsAndDocuments } from "../../utils/firebase";
import { getErrorMessage } from "../../utils/utilityFunctions";

export type ShopStateType = {
  shopCategories: DocumentData[];
  isLoading: boolean;
  error: string;
};

export type ShopDispatchType = ThunkDispatch<object, object, UnknownAction>;

const initialState: ShopStateType = {
  shopCategories: [],
  isLoading: false,
  error: "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchShopItemsStart: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    fetchShopItemsSuccess: (state, action: PayloadAction<DocumentData[]>) => {
      state.shopCategories = action.payload;
      state.isLoading = false;
    },
    fetchShopItemsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { fetchShopItemsStart, fetchShopItemsSuccess, fetchShopItemsError } =
  shopSlice.actions;

export const fetchShopItemsThunkCreator =
  () => async (dispatch: ShopDispatchType) => {
    dispatch(fetchShopItemsStart(true));
    try {
      const shopCollectionsArr = await getCollectionsAndDocuments();
      dispatch(fetchShopItemsSuccess(shopCollectionsArr));
    } catch (error) {
      dispatch(fetchShopItemsError(getErrorMessage(error)));
    }
  };

export const shopReducer = shopSlice.reducer;
