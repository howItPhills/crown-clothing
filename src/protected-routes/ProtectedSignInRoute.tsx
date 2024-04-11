import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useIsUserLoggedIn } from "../store/user/user-selector-hooks";

export const ProtectedSignInRoute = ({ children }: PropsWithChildren) => {
  const isLoggedIn = useIsUserLoggedIn();

  return isLoggedIn ? <Navigate to={"/"} replace /> : children;
};
