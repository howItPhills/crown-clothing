import { User } from "firebase/auth";

const SET_CURRENT_USER = "SET_CURRENT_USER";

export type UserType = User | null;

type UserStateType = {
  currentUser: UserType;
};

type SetCurrentUserActionType = {
  type: typeof SET_CURRENT_USER;
  payload: UserType;
};

type UnionActionType = SetCurrentUserActionType;

const initialState: UserStateType = {
  currentUser: null,
};

export const userReducer = (
  state: UserStateType = initialState,
  { type, payload }: UnionActionType,
): UserStateType => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

export const setCurrentUserAC = (
  payload: UserType,
): SetCurrentUserActionType => {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
};
