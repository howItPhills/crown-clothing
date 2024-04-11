import { ButtonHTMLAttributes } from "react";
import { Preloader } from "./Preloader";

interface CustomButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
  isGoogleButton?: boolean;
  className?: string;
}

export const CustomButton = ({
  text,
  disabled = false,
  isGoogleButton = false,
  className,
  ...otherProps
}: CustomButtonPropsType) => {
  return (
    <button
      disabled={disabled}
      className={`${isGoogleButton ? "hover:enabled:border-blue-500 hover:enabled:bg-blue-500" : "hover:enabled:border-slate-600 hover:enabled:bg-slate-600"} ${className} flex w-auto items-center justify-center border border-slate-300 bg-slate-50 px-7 py-2 shadow-xl transition-colors duration-200 hover:text-slate-100 disabled:text-slate-500 `}
      {...otherProps}
    >
      {disabled ? <Preloader /> : text.toUpperCase()}
    </button>
  );
};
