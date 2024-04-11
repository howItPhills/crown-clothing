export const CrossIcon = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <img
      onClick={onClick}
      src="/images/cancel.png"
      alt="close-cross"
      className={`size-6 cursor-pointer ${className}`}
    />
  );
};
