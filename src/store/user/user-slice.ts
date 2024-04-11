import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export type UserType = User | null;

type UserStateType = {
  currentUser: UserType;
};

const initialState: UserStateType = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<UserType>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser: setCurrentUserAC } = userSlice.actions;
export const userReducer = userSlice.reducer;
