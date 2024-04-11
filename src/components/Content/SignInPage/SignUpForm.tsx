import { SubmitHandler, useForm } from "react-hook-form";
import { CustomButton } from "../../reusable/CustomButton";
import { v1 } from "uuid";
import { signUpNewUser } from "../../../utils/firebase";
import { getErrorMessage } from "../../../utils/utilityFunctions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../../reusable/ErrorMessage";
import { InputField } from "../../reusable/InputField";

type InputType = {
  id: string;
  type: string;
  label: string;
  name: "displayName" | "password" | "email" | "confirmPassword";
};

const inputs: InputType[] = [
  {
    id: v1(),
    label: "name",
    type: "text",
    name: "displayName",
  },
  {
    id: v1(),
    label: "email",
    type: "email",
    name: "email",
  },
  {
    id: v1(),
    label: "password",
    type: "password",
    name: "password",
  },
  {
    id: v1(),
    label: "confirm password",
    type: "password",
    name: "confirmPassword",
  },
];

const schema = z
  .object({
    displayName: z
      .string()
      .trim()
      .min(3, { message: "Must contain at least 3 character('s)" }),
    email: z.string().trim().email(),
    password: z
      .string()
      .trim()
      .min(8, { message: "Must contain at least 8 character('s)" }),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormInputFieldsType = z.infer<typeof schema>;

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<FormInputFieldsType>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormInputFieldsType> = async ({
    email,
    password,
    displayName,
  }) => {
    try {
      await signUpNewUser(email, password, displayName);
      reset();
    } catch (error) {
      setError("root", { message: getErrorMessage(error) });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-1 flex flex-col gap-3">
        {inputs.map(({ id, label, type, name }) => (
          <InputField
            key={id}
            type={type}
            label={label}
            {...register(name)}
            errorMessage={errors[name] ? errors[name]?.message : ""}
          />
        ))}
      </div>
      {errors.root && (
        <div className="mb-6">
          <ErrorMessage message={errors.root.message} />
        </div>
      )}
      <CustomButton disabled={isSubmitting} text="Sign Up" type="submit" />
    </form>
  );
};
