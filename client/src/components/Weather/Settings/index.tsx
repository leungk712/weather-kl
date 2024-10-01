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
enum SettingsKey {
  URL = "url",
  ApiKey = "apiKey",
}

// ===== React Router ===== //
import { useNavigate } from "react-router-dom";

// ===== Redux ===== //
import { useAppDispatch } from "redux/hooks";
import { setSettings } from "redux/slices/settings/slice";

// ===== Styles ===== //

export default function Settings() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [currentSettings, setCurrentSettings] = useState<{
    url: SettingsKey | string;
    apiKey: SettingsKey | string;
  }>({
    url: "",
    apiKey: "",
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
      setSettings({
        weatherApiKey: currentSettings.apiKey,
        weatherUrl: currentSettings.url,
      })
    );

    navigate("/dashboard");
  };

  return (
    <Card
      data-testid="settings-card"
      sx={{ height: 300, width: 400, border: "1px solid gray" }}
    >
      <CardHeader data-testid="settings-card-header" title="Settings" />

      <Divider />

      <CardContent data-testid="settings-card-content">
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={2}
        >
          <TextField
            data-testid="weather-url-input"
            label="weather url"
            value={currentSettings[SettingsKey.URL] || ""}
            sx={{ width: "100%" }}
            onChange={(evt) => handleInput(evt, SettingsKey.URL)}
          />

          <TextField
            data-testid="weather-api-input"
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
