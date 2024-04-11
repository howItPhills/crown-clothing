import { SubmitHandler, useForm } from "react-hook-form";
import { signIn, signInWithGooglePopup } from "../../../utils/firebase";
import { CustomButton } from "../../reusable/CustomButton";
import { getErrorMessage } from "../../../utils/utilityFunctions";
import { ErrorMessage } from "../../reusable/ErrorMessage";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../reusable/InputField";

const schema = z.object({
  email: z.string().trim().email(),
  password: z
    .string()
    .trim()
    .min(8, { message: "Must contain at least 8 character('s)" }),
});

type FormInputsNameType = z.infer<typeof schema>;

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormInputsNameType>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormInputsNameType> = async ({
    email,
    password,
  }) => {
    try {
      await signIn(email, password);
      reset();
    } catch (error) {
      setError("root", { message: getErrorMessage(error) });
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-1 flex flex-col">
        <InputField
          label="email"
          type="email"
          {...register("email")}
          errorMessage={errors.email && errors.email.message}
        />
        <InputField
          label="password"
          type="password"
          {...register("password")}
          errorMessage={errors.password && errors.password.message}
        />
      </div>
      {errors.root && (
        <div className="mb-6">
          <ErrorMessage message={errors.root.message} />
        </div>
      )}
      <div className="flex flex-col gap-5 xl:flex-row xl:justify-between">
        <CustomButton text="Sign in" type="submit" disabled={isSubmitting} />
        <CustomButton
          text="Sign In with Google"
          isGoogleButton
          type="button"
          onClick={signInWithGoogle}
        />
      </div>
    </form>
  );
};
