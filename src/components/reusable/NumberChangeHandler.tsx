type NumberChangeHandlerPropsType = {
  number: number;
  increaseFunction: () => void;
  decreaseFunction: () => void;
};

const NumberChangeHandler = ({
  number,
  increaseFunction,
  decreaseFunction,
}: NumberChangeHandlerPropsType) => {
  return (
    <div className="grid select-none grid-cols-4 items-center justify-items-center gap-0.5">
      <img
        src="/images/left-arrow.png"
        className="size-3 cursor-pointer justify-self-end"
        alt="decrease"
        onClick={decreaseFunction}
      />
      <span className="col-span-2 grid-cols-subgrid text-center">{number}</span>
      <img
        src="/images/right-arrow.png"
        className="size-3 cursor-pointer justify-self-start"
        alt="increase"
        onClick={increaseFunction}
      />
    </div>
  );
};

export default NumberChangeHandler;
