// ===== Material UI ===== //
import { Card, CardContent, Typography } from "@mui/material";

// ===== Components ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Redux ===== //

// ===== Styles ===== //

export default function Home() {
  return (
    <Card data-testid="home-intro-card" sx={{ height: 400, width: 400 }}>
      <CardContent data-testid="home-intro-card-content">
        <Typography variant="h6">
          Hello! Welcome to ResFrac Kev L's Demo, home of the premiere weather
          app.
        </Typography>

        <Typography variant="body1">
          In this app you'll be able to search the weather info for any city in
          the world! But before you do that click the 'Login' button on the top
          right.
        </Typography>
      </CardContent>
    </Card>
  );
}
