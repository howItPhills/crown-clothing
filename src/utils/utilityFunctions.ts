import { FirebaseError } from "firebase/app";

export const getErrorMessage = (error: unknown) => {
  if (error instanceof FirebaseError) {
    return error.code.substring(5).split("-").join(" ").toUpperCase();
  } else if (error instanceof Error) {
    return error.message;
  } else {
    console.log(String(error));
    return "Unknown error";
  }
};

export const propChangeHandler = <
  T extends { id: number },
  U extends keyof T,
  V extends T[U],
>(
  array: T[],
  targetId: number,
  prop: U,
  newValue: V,
) => {
  return array.map((arrayItem) =>
    arrayItem.id === targetId ? { ...arrayItem, [prop]: newValue } : arrayItem,
  );
};
