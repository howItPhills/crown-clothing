import { useContext } from "react";
import {
  UserContextUpdater,
  UserContextUpdaterType,
  UserContextValue,
} from "../contexts/UserContext";
import { User } from "firebase/auth";

export const useUserContextValue = () => {
  return useContext(UserContextValue) as User;
};

export const useUserContextUpdater = () => {
  return useContext(UserContextUpdater) as UserContextUpdaterType;
};

export const useIsUserLoggedIn = () => {
  const user = useContext(UserContextValue) as User;
  return user !== null;
};
