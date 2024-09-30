export const initialUserQuery = `
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY,
        first_name STRING NOT NULL,
        last_name STRING NOT NULL,
        email STRING NOT NULL
    )
`;
