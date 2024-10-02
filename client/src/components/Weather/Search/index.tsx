import { useState } from "react";

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
  Tooltip,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

// ===== Components ===== //
import UnitToggle from "components/Weather/UnitToggle";
import InfoDialog from "components/Weather/InfoDialog";

// ===== Constants ===== //
import { icons } from "./constants";

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Redux ===== //
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { fetchWeather } from "redux/slices/settings/endpoints";

// ===== Styles ===== //

export default function Search() {
  const dispatch = useAppDispatch();

  const { weatherApiKey, weatherUrl } = useAppSelector(
    (state) => state.settings
  );

  const [city, setCity] = useState<string>("");
  const [unit, setUnit] = useState<string>("f");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const searchDisabled = !weatherApiKey || !weatherUrl;

  const handleInput = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCity(evt.target.value);
  };

  const handleSetUnit = (
    _evt: React.MouseEvent<HTMLElement>,
    newUnit: string | null
  ) => {
    if (!newUnit) {
      return;
    }

    setUnit(newUnit);
  };

  const handleSearch = () => {
    const query = `&query=${city.trim().replace(" ", "%20")}&units=${unit}`;

    const payload = {
      weatherUrl,
      weatherApiKey,
      query,
    };

    dispatch(fetchWeather(payload))
      .unwrap()
      .then(() => {
        setIsDialogOpen(true);
      })
      .catch((err) => {
        console.error(
          "unable to retrieve weather information - api error",
          err
        );
      });
  };

  const handleCloseDiaglog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
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
                <IconButton key={WeatherIcon.type} size="large" disabled={true}>
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
                      <Tooltip
                        title={searchDisabled ? "settings invalid" : "search"}
                      >
                        <InputAdornment position="end">
                          <IconButton
                            data-testid="weather-search-btn"
                            disabled={searchDisabled}
                            onClick={() => handleSearch()}
                          >
                            <SearchOutlinedIcon />
                          </IconButton>
                        </InputAdornment>
                      </Tooltip>
                    ),
                  },
                }}
                onChange={(evt) => handleInput(evt)}
              />

              <UnitToggle unit={unit} handleSetUnit={handleSetUnit} />
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <InfoDialog open={isDialogOpen} handleClose={handleCloseDiaglog} />
    </>
  );
}
