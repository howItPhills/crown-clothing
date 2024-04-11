import { CardElement } from "@stripe/react-stripe-js";
import { CustomButton } from "./CustomButton";

export const PaymentForm = () => {
  return (
    <div className="flex w-1/2 flex-col gap-3 self-center border p-2">
      <h2>Payment data:</h2>
      <CardElement className="border" />
      <CustomButton text="pay" className="self-end" />
    </div>
  );
};
