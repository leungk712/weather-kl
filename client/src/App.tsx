import { Routes, Route, useLocation } from "react-router-dom";

// ===== Material UI ===== //
import { Box, Container } from "@mui/material";

// ===== Components ===== //
import AppFooter from "components/AppFooter";
import AppToolbar from "components/AppToolbar";
import LandingPage from "./views/LandingPage";
import LoginView from "views/Login";

function App() {
  const location = useLocation();

  return (
    <Container
      data-testid="app-container"
      sx={{
        height: "100vh",
        width: "100%",
        flexGrow: 1,
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "85vh",
          flexGrow: 1,
        }}
      >
        <Routes key={location.pathname} location={location}>
          <Route index={true} element={<LandingPage />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </Box>

      <Box
        data-testid="app-footer-container"
        sx={{
          width: "100%",
          mt: "auto",
        }}
      >
        <AppFooter />
      </Box>
    </Container>
  );
}

export default App;
