import React from "react";
import ReactDOM from "react-dom/client";

// ===== Components ===== //
import App from "./App";

// ===== Google OAuth ===== //
import { GoogleOAuthProvider } from "@react-oauth/google";

// ===== React Router ===== //
import { BrowserRouter } from "react-router-dom";

// ===== Redux ===== //
import { Provider } from "react-redux";
import { store } from "./redux/store";

// ===== Styles ===== //
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/themes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <Provider store={store()}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename={import.meta.env.VITE_HOME_URI || ""}>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
