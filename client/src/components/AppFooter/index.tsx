// ===== Material UI ===== //
import { Box, Typography } from "@mui/material";

// ===== Components ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Redux ===== //

// ===== Styles ===== //

export default function AppFooter() {
  return (
    <Box
      data-testid="app-footer"
      sx={{
        width: "100%",
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#87A878",
      }}
    >
      <Typography
        data-testid="app-footer-text"
        variant="body2"
        sx={{ fontWeight: "bold" }}
      >
        Kevin L Copyright 2024
      </Typography>
    </Box>
  );
}
