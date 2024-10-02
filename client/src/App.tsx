import { Routes, Route, useLocation } from "react-router-dom";

// ===== Material UI ===== //
import { Box, Container } from "@mui/material";

// ===== Components ===== //
import AppFooter from "components/AppFooter";
import AppToolbar from "components/AppToolbar";
import Dashboard from "views/Dashboard";
import LandingPage from "./views/LandingPage";
import LoginView from "views/Login";
import SettingsView from "views/Settings";

// ===== Styles ===== //
import { flexCenter } from "styles/index";

function App() {
  const location = useLocation();

  return (
    <Container
      data-testid="app-container"
      sx={{
        height: "100vh",
        width: "100%",
        m: 0,
        p: 0,
      }}
      disableGutters={true}
      maxWidth={false}
    >
      <AppToolbar />

      <Box
        data-testid="app-content-container"
        sx={{
          ...flexCenter,
          minHeight: "calc(100% - 110px)",
          flexGrow: 1,
        }}
      >
        <Routes key={location.pathname} location={location}>
          <Route index={true} element={<LandingPage />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<SettingsView />} />
        </Routes>
      </Box>

      <Box sx={{ mt: "auto" }}>
        <AppFooter />
      </Box>
    </Container>
  );
}

export default App;
