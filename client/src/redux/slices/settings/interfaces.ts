// ===== Interfaces ===== //
import { StatusAndError } from "redux/statuses";

export interface State {
  weatherApiKey: string;
  weatherUrl: string;
  weatherInfo: WeatherStackApiResponse | null;
  fetchWeatherStatus: StatusAndError;
  updateSettingsStatus: StatusAndError;
}

export type SettingsPayload = Pick<State, "weatherApiKey" | "weatherUrl">;

export interface SettingsApiResponse {
  id: number;
  weatherUrl: string;
  weatherApiKey: string;
  email: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface WeatherStackApiResponse {
  request: {
    type: string;
    query: string;
    language: string;
    unit: string;
  };
  location: {
    name: string;
    country: string;
    region: string;
    lat: string;
    lon: string;
    timezone_id: string;
    localtime: string;
    localtime_epoch: number;
    utc_offset: string;
  };
  current: {
    observation_time: string;
    temperature: number;
    weather_code: number;
    weather_icons: string[];
    weather_descriptions: string[];
    wind_speed: number;
    wind_degree: number;
    wind_dir: string;
    pressure: number;
    precip: number;
    humidity: number;
    cloudcover: number;
    feelslike: number;
    uv_index: number;
    visibility: number;
    is_day: string;
  };
}
