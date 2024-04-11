import { NavigationBar } from "./components/Header/NavigationBar";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { onAuthStateChangeListener } from "./utils/firebase";
import { useUserStateUpdater } from "./store/user/user-dispatch-hook";

export const App = () => {
  const { setCurrentUser } = useUserStateUpdater();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [setCurrentUser]);

  return (
    <div className="flex min-h-full flex-col">
      <NavigationBar />
      <Content />
      <Footer />
    </div>
  );
};
