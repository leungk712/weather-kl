import { useState } from "react";

// ===== Material UI ===== //
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
} from "@mui/material";

// ===== Components ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //
import { Path } from "interfaces/Path";

enum SettingsKey {
  URL = "url",
  ApiKey = "apiKey",
}

// ===== React Router ===== //
import { useNavigate } from "react-router-dom";

// ===== Redux ===== //
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateSettings } from "redux/slices/settings/endpoints";

// ===== Styles ===== //
import { flexCenter } from "styles/index";

export default function Settings() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { weatherApiKey, weatherUrl } = useAppSelector(
    (state) => state.settings
  );
  const { user } = useAppSelector((state) => state.user);
  const { email, id } = user;

  const [currentSettings, setCurrentSettings] = useState<{
    url: SettingsKey | string;
    apiKey: SettingsKey | string;
  }>({
    url: weatherUrl || "",
    apiKey: weatherApiKey || "",
  });

  const disabled = !Object.values(currentSettings)?.every(
    (key) => key.length > 0
  );

  const handleInput = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: SettingsKey
  ) => {
    setCurrentSettings((prevVal) => ({
      ...prevVal,
      [key]: evt.target.value,
    }));
  };

  const handleSave = () => {
    dispatch(
      updateSettings({
        weatherApiKey: currentSettings.apiKey.trim(),
        weatherUrl: currentSettings.url.trim(),
        email,
        userId: id as number,
      })
    )
      .unwrap()
      .then(() => {
        navigate(`/${Path.Dashboard}`);
      })
      .catch((err) => {
        console.error("uh oh. unable to update your settings", err);
      });
  };

  return (
    <Card
      data-testid="settings-card"
      sx={{ height: 300, width: 400, border: "1px solid gray" }}
    >
      <CardHeader data-testid="settings-card-header" title="Settings" />

      <Divider />

      <CardContent data-testid="settings-card-content">
        <Stack sx={{ ...flexCenter }} spacing={2}>
          <TextField
            data-testid="weather-url-input"
            label="weather url"
            value={currentSettings[SettingsKey.URL] || ""}
            sx={{ width: "100%" }}
            onChange={(evt) => handleInput(evt, SettingsKey.URL)}
          />

          <TextField
            data-testid="weather-api-key-input"
            label="weather api key"
            value={currentSettings[SettingsKey.ApiKey] || ""}
            sx={{ width: "100%" }}
            onChange={(evt) => handleInput(evt, SettingsKey.ApiKey)}
          />
        </Stack>

        <Stack direction="row" sx={{ justifyContent: "end", my: 1 }}>
          <Button
            data-testid="save-settings-btn"
            variant="outlined"
            disabled={disabled}
            color="success"
            onClick={() => handleSave()}
          >
            Save
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
