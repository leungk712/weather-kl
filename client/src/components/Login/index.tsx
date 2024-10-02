import { useState } from "react";

// ===== Material UI ===== //
import {
  Button,
  Card,
  CardHeader,
  Divider,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

// ===== Components ===== //
import GoogleAuth from "./GoogleAuth";

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Redux ===== //

// ===== Styles ===== //
import { flexCenter } from "styles/index";

export default function Login() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisiblity = () => {
    setIsVisible((prevVal) => !prevVal);
  };

  return (
    <Card
      data-testid="login-card"
      sx={{
        height: 400,
        width: 400,
        display: "flex",
        flexDirection: "column",
        border: "1px solid gray",
      }}
    >
      <CardHeader
        data-testid="login-card-header"
        title="Login"
        sx={{ width: "100%" }}
      />

      <Divider />

      <Stack
        sx={{
          ...flexCenter,
          width: "auto",
          p: 2,
        }}
      >
        <TextField
          data-testid="login-username-input"
          label="username"
          sx={{ width: "100%", mb: 1 }}
        />

        <TextField
          data-testid="login-password-input"
          type={isVisible ? "text" : "password"}
          label="password"
          sx={{ my: 1, width: "100%" }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleVisiblity}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  {isVisible ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </InputAdornment>
              ),
            },
          }}
        />

        <Button
          data-testid="login-btn"
          variant="outlined"
          sx={{ width: "100%", my: 1 }}
        >
          Login
        </Button>

        <GoogleAuth />
      </Stack>
    </Card>
  );
}
