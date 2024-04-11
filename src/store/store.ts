import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";

export type RootStateType = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});
