# ResFrac Demo

## Summary

This application allows a user to log into a web application via Google OAuth. After logging in, the user is required to set a base url and api key targeting the WeatherStack API base. After the settings are set, the user can now type in cities from around the world retrieving general weather information

## Client

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit (State Management)](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [Google OAuth](https://www.npmjs.com/package/@react-oauth/google)
- [Axios](https://axios-http.com/docs/intro)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

1. Open a terminal instance
2. `cd client` directory
3. create an `.env` file and populate it with values from `.env.sample`
4. `npm install`
5. `npm run build`
6. A dist file should be generated which will be served by the server

### WeatherStack

- WeatherStack base Url `https://api.weatherstack.com/current?access_key=`
- WeatherStack API Key can be generated via a [Free Account](https://weatherstack.com/signup/free)

## Server

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [SQLite3](https://github.com/TryGhost/node-sqlite3)
- [Sequelize](https://sequelize.org/)

1. Open another terminal instance
2. `cd server` directory
3. create an `.env` file and populate it with the values from `.env.sample`
4. `npm install`
5. `npm run start`
6. Open a browser and go to `localhost:(3010|3000)`
