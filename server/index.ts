import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// ===== Schemas ===== //
import { User, Settings, sequelize } from "./database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (_req: Request, res: Response) => {
  res.send("Node, Express, TypeScript, SQLite server");
});

app.get("/health", async (_req: Request, res: Response) => {
  res.send("server is up, healthy, and running!");
});

app.get("/users", async (_req: Request, res: Response) => {
  const users = await User.findAll();

  res.json(users);
});

app.post("/user", async (req: Request, res: Response) => {
  const { firstName, lastName, email } = req.body;

  const [user] = await User.findOrCreate({
    where: { firstName, lastName, email },
  });

  res.json(user);
});

app.put("/settings", async (req: Request, res: Response) => {
  const { weatherApiKey, weatherUrl, email, userId } = req.body;

  const userSettings = await Settings.findOne({
    where: { email, userId },
  });

  console.log("userSettings", userSettings);

  if (!userSettings) {
    const [settings] = await Settings.findOrCreate({
      where: { email, userId },
      defaults: {
        weatherApiKey,
        weatherUrl,
      },
    });

    res.json(settings);

    return;
  }

  await userSettings?.update({
    weatherApiKey,
    weatherUrl,
  });

  await userSettings?.save();

  const updatedUserSettings = await userSettings?.reload();

  res.json(updatedUserSettings);
});

app.get("/settings", async (_req: Request, res: Response) => {
  const settings = await Settings.findAll();

  res.json(settings);
});

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("error running sequelize sync command", err);
  });
