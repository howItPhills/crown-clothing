export const CheckoutTableHeadings = () => {
  return (
    <ul className="grid w-full grid-cols-5 divide-x-2 divide-slate-400 text-center *:uppercase">
      <li>product</li>
      <li>price</li>
      <li>quantity</li>
      <li>total price</li>
      <li className="select-none opacity-0">remove</li>
    </ul>
  );
};
