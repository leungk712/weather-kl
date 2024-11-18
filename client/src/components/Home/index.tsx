// ===== Material UI ===== //
import { Box, Card, CardContent, Typography } from "@mui/material";

// ===== Components ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Redux ===== //

// ===== Styles ===== //

export default function Home() {
  return (
    <Box>
      <Typography variant="h3">Greetings</Typography>

      <Card data-testid="home-intro-card" sx={{ height: "100%", width: 400 }}>
        <CardContent data-testid="home-intro-card-content">
          <Typography variant="h6">
            Hello! Welcome to Weather KL, home of the premiere weather app.
          </Typography>

          <Typography variant="body1">
            In this app you'll be able to search the weather info for any city
            in the world! But before you do that click the 'Login' button on the
            top right.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
