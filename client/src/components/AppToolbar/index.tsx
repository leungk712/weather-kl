// ===== Material UI ===== //
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  Button,
  Stack,
} from "@mui/material";

// ===== Components ===== //
import Logout from "components/Logout";

// ===== Constants ===== //

// ===== Helpers ===== //
import { generateAvatarName } from "./helpers";

// ===== Interfaces ===== //
import { Path } from "interfaces/Path";

// ===== React Router ===== //
import { useNavigate } from "react-router-dom";

// ===== Redux ===== //
import { useAppSelector } from "redux/hooks";

// ===== Styles ===== //
import { DEFAULT_BG_COLOR } from "styles/themes";

export default function AppToolbar() {
  const navigate = useNavigate();

  const { isLoggedIn, user } = useAppSelector((state) => state.user);
  const { firstName, lastName } = user;

  const avatarText = generateAvatarName(firstName, lastName);

  const handleNavigation = (path = "/") => {
    if (path === Path.Settings && !isLoggedIn) {
      return;
    }

    if (isLoggedIn && path === "/") {
      navigate(`/${Path.Dashboard}`);
    }

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
            backgroundColor: DEFAULT_BG_COLOR,
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
            Weather KL
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              data-testid="app-toolbar-settings-btn"
              color="inherit"
              variant="outlined"
              onClick={() => handleNavigation("settings")}
            >
              Settings
            </Button>

            {isLoggedIn ? (
              <Logout />
            ) : (
              <Button
                data-testid="app-toolbar-login-btn"
                color="inherit"
                variant="outlined"
                onClick={() => handleNavigation("login")}
              >
                Login
              </Button>
            )}

            {isLoggedIn && avatarText ? (
              <Avatar
                data-testid="avatar-content"
                variant="square"
                sx={{ backgroundColor: "#7e57c2" }}
              >
                {avatarText}
              </Avatar>
            ) : null}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
