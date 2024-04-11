type DeleteIconPropsType = {
  removeFunction: () => void;
};

export const DeleteIcon = ({ removeFunction }: DeleteIconPropsType) => {
  return (
    <img
      src="/images/trash.png"
      alt="delete-icon"
      className="size-6 cursor-pointer pb-0.5"
      onClick={removeFunction}
    />
  );
};
