import {
  FocusEventHandler,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import { ErrorMessage } from "./ErrorMessage";
import { v1 } from "uuid";

type InputProps = {
  label: string;
  errorMessage: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, ...otherProps }, ref) => {
    const [isLabelOnTop, setIsLabelOnTop] = useState(false);

    const onBlurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
      const value = e.currentTarget.value;
      setIsLabelOnTop(value.trim() !== "");
    };

    const onFocusHandler = () => setIsLabelOnTop(true);

    const id = v1();

    return (
      <div className="relative flex flex-col gap-1">
        <input
          {...otherProps}
          className={`relative ${errorMessage && "shadow-[0_0px_2px_2px_rgba(0,0,0,0.3)] shadow-red-500"} border border-slate-300 px-3 py-3 shadow-lg placeholder:text-sm placeholder:uppercase focus:outline-none`}
          ref={ref}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          id={id}
        />
        <label
          htmlFor={id}
          className={`absolute select-none ${isLabelOnTop ? "-top-5 left-0.5" : "left-3 top-3.5"} text-sm uppercase text-slate-500 transition-all duration-200`}
        >
          {label}
        </label>
        <ErrorMessage message={errorMessage} />
      </div>
    );
  },
);
