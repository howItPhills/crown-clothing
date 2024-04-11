import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <main className="flex flex-auto items-center justify-center">
      <Outlet />
    </main>
  );
};
