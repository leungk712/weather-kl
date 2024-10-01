// ===== Material UI ===== //
import { Button, Card, Stack, TextField } from "@mui/material";

// ===== Components ===== //
import GoogleAuth from "./GoogleAuth";

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Redux ===== //

// ===== Styles ===== //

export default function Login() {
  return (
    <Card
      sx={{
        height: 400,
        width: 400,
        justifyContent: "center",
        display: "flex",
        border: "1px solid gray",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          p: 2,
        }}
      >
        <TextField
          data-testid="login-username-input"
          label="username"
          sx={{ width: "100%" }}
        />

        <TextField
          data-testid="login-password-input"
          type="password"
          label="password"
          sx={{ my: 1, width: "100%" }}
        />

        <Button variant="outlined" sx={{ width: "100%", my: 1 }}>
          Login
        </Button>

        <GoogleAuth />
      </Stack>
    </Card>
  );
}
