// ===== Material UI ===== //
import { AppBar, Box, Toolbar, Typography, Button, Stack } from "@mui/material";

// ===== Components ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== React Router ===== //
import { useNavigate } from "react-router-dom";

// ===== Redux ===== //

// ===== Styles ===== //

export default function AppToolbar() {
  const navigate = useNavigate();

  const handleNavigation = (path = "/") => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar data-testid="app-toolbar" position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#87A878",
          }}
        >
          <Typography
            data-testid="app-toolbar-title"
            variant="h6"
            onClick={() => handleNavigation()}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            ResFrac Kev L
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              data-testid="app-toolbar-settings-btn"
              color="inherit"
              variant="outlined"
            >
              Settings
            </Button>

            <Button
              data-testid="app-toolbar-login-btn"
              color="inherit"
              variant="outlined"
              onClick={() => handleNavigation("login")}
            >
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
