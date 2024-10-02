// ===== Material UI ===== //
import { Box, Typography } from "@mui/material";

// ===== Components ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Redux ===== //

// ===== Styles ===== //
import { DEFAULT_BG_COLOR } from "styles/themes";
import { flexCenter } from "styles/index";

export default function AppFooter() {
  return (
    <Box
      data-testid="app-footer"
      sx={{
        width: "100%",
        minHeight: 46,
        ...flexCenter,
        backgroundColor: DEFAULT_BG_COLOR,
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
