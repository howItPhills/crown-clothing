import { User } from "firebase/auth";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { onAuthStateChangeListener } from "../utils/firebase";

export type UserContextUpdaterType = Dispatch<SetStateAction<User | null>>;

export const UserContextValue = createContext<User | null>(null);
export const UserContextUpdater = createContext<UserContextUpdaterType | null>(
  null,
);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContextUpdater.Provider value={setCurrentUser}>
      <UserContextValue.Provider value={currentUser}>
        {children}
      </UserContextValue.Provider>
    </UserContextUpdater.Provider>
  );
};
