export const ErrorMessage = ({ message }: { message: string | undefined }) => {
  return (
    <div className={`${!message && "opacity-0"} text-center text-red-500`}>
      {message ? message : "no error"}
    </div>
  );
};
