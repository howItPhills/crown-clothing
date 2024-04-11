import { useDispatch } from "react-redux";
import { UserType } from "./user-reducer";
import { setCurrentUserAC } from "./user-slice";

type UserStateUpdater = {
  setCurrentUser: (user: UserType) => void;
};

export const useUserStateUpdater = () => {
  const dispatch = useDispatch();

  const setCurrentUser = (user: UserType) => {
    dispatch(setCurrentUserAC(user));
  };

  const userStateUpdater: UserStateUpdater = {
    setCurrentUser,
  };

  return userStateUpdater;
};
