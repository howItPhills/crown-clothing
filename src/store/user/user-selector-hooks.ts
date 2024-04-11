import { useSelector } from "react-redux";
import { RootStateType } from "../store";
import { UserType } from "./user-reducer";
import { createSelector } from "reselect";

const selectUserState = (state: RootStateType) => state.user;

const selectCurrentUser = createSelector(
  selectUserState,
  (userState) => userState.currentUser,
);

export const useCurrentUser = () =>
  useSelector<RootStateType, UserType>(selectCurrentUser);

export const useIsUserLoggedIn = () => {
  const user = useCurrentUser();
  return !!user;
};
