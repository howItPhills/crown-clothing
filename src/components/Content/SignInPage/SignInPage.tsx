import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export const SignInPage = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10 py-10 md:w-3/5 md:flex-row md:items-start md:justify-between md:p-0">
      <div className="flex w-2/5 flex-col gap-7">
        <h3 className="text-2xl">Already have an account?</h3>
        <span>Sign in with email and password:</span>
        <SignInForm />
      </div>
      <div className="flex w-2/5 flex-col gap-7">
        <h3 className="text-2xl">Dont have an account?</h3>
        <span>Create an account with email and password:</span>
        <SignUpForm />
      </div>
    </div>
  );
};
