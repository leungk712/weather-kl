// ===== Redux Toolkit ===== //
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

// ===== Redux Logger ===== //
import logger from "redux-logger";

// ===== Trausti ===== //

export const store = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({}).concat(logger);
    },
    devTools: true,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
