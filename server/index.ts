import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// ===== Logger ===== //
import { logger } from "./logging";

// ===== Schemas ===== //
import { User, Settings, sequelize } from "./database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (_req: Request, res: Response) => {
  logger.info("GET / -- successfully hitting server");
  res.send("Node, Express, TypeScript, SQLite server");
});

app.get("/health", async (_req: Request, res: Response) => {
  logger.info("GET /health -- health check");
  res.send("server is up, healthy, and running!");
});

app.get("/users", async (_req: Request, res: Response) => {
  const users = await User.findAll();

  logger.info("GET /users -- able to retrieve all users");
  res.json(users);
});

app.post("/user", async (req: Request, res: Response) => {
  const { firstName, lastName, email } = req.body;

  const [user] = await User.findOrCreate({
    where: { firstName, lastName, email },
  });

  logger.info("POST /user -- able to create user");
  res.json(user);
});

app.put("/settings", async (req: Request, res: Response) => {
  const { weatherApiKey, weatherUrl, email, userId } = req.body;

  const userSettings = await Settings.findOne({
    where: { email, userId },
  });

  if (!userSettings) {
    const [settings] = await Settings.findOrCreate({
      where: { email, userId },
      defaults: {
        weatherApiKey,
        weatherUrl,
      },
    });

    logger.info("PUT /settings -- able to create new settings");
    res.json(settings);

    return;
  }

  await userSettings?.update({
    weatherApiKey,
    weatherUrl,
  });

  await userSettings?.save();

  const updatedUserSettings = await userSettings?.reload();

  logger.info("PUT /settings -- able to update settings");
  res.json(updatedUserSettings);
});

app.get("/settings", async (_req: Request, res: Response) => {
  const settings = await Settings.findAll();

  logger.info("GET /settings -- able to retrieve all settings");
  res.json(settings);
});

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      logger.info(`[server]: server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    logger.error(`"error running sequelize sync command", ${err}`);
  });
