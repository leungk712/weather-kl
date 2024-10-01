import { useState } from "react";
import axios from "axios";

// ===== Material UI ===== //
import {
  Alert,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// ===== Components ===== //

// ===== Constants ===== //
import { icons } from "./constants";

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Redux ===== //
import { useAppDispatch, useAppSelector } from "redux/hooks";

// ===== Styles ===== //

export default function Search() {
  const dispatch = useAppDispatch();

  const { weatherApiKey, weatherUrl } = useAppSelector(
    (state) => state.settings
  );

  const [city, setCity] = useState<string>("");
  const [unit, setUnit] = useState<string>("f");
  const [weatherInfo, setWeatherInfo] = useState<unknown | null>(null);

  const handleInput = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCity(evt.target.value);
  };

  const handleSetUnit = (
    _event: React.MouseEvent<HTMLElement>,
    newUnit: string | null
  ) => {
    if (!newUnit) {
      return;
    }

    setUnit(newUnit);
  };

  const handleSearch = async () => {
    const query = `&query=${city.replace(" ", "%20")}&units=${unit}`;

    try {
      await axios
        .get(`${weatherUrl}${weatherApiKey}${query}`)
        .then((resp: unknown) => {
          setWeatherInfo(resp);
        });
    } catch (err) {
      console.error("unable to retrieve weather information - api error", err);
    }
  };

  return (
    <Card
      data-testid="weather-search-card"
      sx={{
        height: "100%",
        width: 600,
      }}
    >
      <CardHeader
        data-testid="weather-search-card-header"
        title="Premiere Weather Search"
        subtitle="search weather for any city around the world"
      />

      <Divider />

      <Alert
        data-testid="weather-search-info-alert"
        severity="info"
        sx={{ m: 1 }}
      >
        You must have both weather url & api key set in 'Settings'
      </Alert>

      <CardContent sx={{ p: 0 }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "10%",
              borderRight: "1px solid lightgray",
            }}
          >
            {icons?.map((WeatherIcon) => (
              <IconButton size="large" disabled={true}>
                <WeatherIcon.icon />
              </IconButton>
            ))}
          </Stack>

          <Stack justifyContent="start" sx={{ width: "100%", ml: 6 }}>
            <TextField
              data-testid="weather-search-input"
              label="City"
              placeholder="Enter a city (ex. New York)"
              sx={{ width: "75%" }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        data-testid="weather-search-btn"
                        onClick={() => handleSearch()}
                      >
                        <SearchOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              onChange={(evt) => handleInput(evt)}
            />

            <ToggleButtonGroup
              data-testid="unit-toggle-btn-group"
              value={unit}
              exclusive
              onChange={handleSetUnit}
              aria-label="unit selection"
              sx={{ mt: 1 }}
              color="success"
            >
              <ToggleButton
                data-testid="unit-celsius-btn"
                value="m"
                aria-label="celsius button select"
                size="small"
              >
                Celsius
              </ToggleButton>
              <ToggleButton
                data-testid="unit-fahrenheit-btn"
                value="f"
                aria-label="celsius button select"
                size="small"
              >
                Fahrenheit
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
