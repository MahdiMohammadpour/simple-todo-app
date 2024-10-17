import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
//slices
import baseReducer from "./slices/baseSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      baseState: baseReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });
};
setupListeners(makeStore().dispatch);

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
