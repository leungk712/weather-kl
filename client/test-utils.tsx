import React, { PropsWithChildren } from "react";

// ===== Google OAuth ===== //
import { GoogleOAuthProvider } from "@react-oauth/google";

// ===== React Router ===== //
import { BrowserRouter } from "react-router-dom";

// ===== Redux ===== //
import { Provider } from "react-redux";
import { AppStore, RootState, store as setupStore } from "./src/redux/store";

// ===== RTL ===== //
import {
  render,
  renderHook,
  queries,
  RenderOptions,
} from "@testing-library/react";

// ===== Styles ===== //
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./src/styles/themes";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename={import.meta.env.VITE_HOME_URI || ""}>
            {children}
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </GoogleOAuthProvider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, queries, ...renderOptions }),
  };
}

export function renderHookWithProviders<Result, Props>(
  render: (initialProps?: Props) => Result,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  return {
    store,
    ...renderHook(render, { wrapper: Wrapper, ...renderOptions }),
  };
}
