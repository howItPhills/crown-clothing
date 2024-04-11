import { PaymentForm } from "../../reusable/PaymentForm";
import { CheckoutItems } from "./CheckoutItems";
import { CheckoutTableHeadings } from "./CheckoutTableHeadings";
import { TotalPrice } from "./TotalPrice";

export const CheckoutPage = () => {
  return (
    <div className="flex h-full w-4/5 flex-col gap-5 self-start py-8">
      <CheckoutTableHeadings />
      <CheckoutItems />
      <TotalPrice />
      <PaymentForm />
    </div>
  );
};
