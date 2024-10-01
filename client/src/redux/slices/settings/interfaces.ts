export interface State {
  weatherApiKey: string;
  weatherUrl: string;
}

export type SettingsPayload = Pick<State, "weatherApiKey" | "weatherUrl">;
