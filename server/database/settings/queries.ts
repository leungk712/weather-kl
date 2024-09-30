export const initialSettingsQuery = `
    CREATE TABLE IF NOT EXISTS settings(
        id INTEGER PRIMARY KEY,
        weather_api_key STRING NOT NULL,
        weather_api_url STRING NOT NULL,
        user_id INTEGER NOT NULL
    )
`;
