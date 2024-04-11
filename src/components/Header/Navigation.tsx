import { NavLink } from "react-router-dom";
import { signOutUser } from "../../utils/firebase";
import { useIsUserLoggedIn } from "../../store/user/user-selector-hooks";

const onActiveStateStyle = (isActive: boolean) =>
  isActive ? "text-slate-100 underline" : "";

export const Navigation = ({ className }: { className: string }) => {
  const isLogged = useIsUserLoggedIn();

  return (
    <nav>
      <ul className={className}>
        <NavLink
          to={"/shop"}
          className={({ isActive }) => onActiveStateStyle(isActive)}
        >
          Shop
        </NavLink>
        <NavLink
          to={"/contacts"}
          className={({ isActive }) => onActiveStateStyle(isActive)}
        >
          Contacts
        </NavLink>
        {isLogged ? (
          <span onClick={signOutUser} className="cursor-pointer">
            Sign Out
          </span>
        ) : (
          <NavLink
            to={"/signIn"}
            className={({ isActive }) => onActiveStateStyle(isActive)}
          >
            Sign in
          </NavLink>
        )}
      </ul>
    </nav>
  );
};
