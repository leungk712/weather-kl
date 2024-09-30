import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { db } from "./database";
import { initialUserQuery } from "./database/user/queries";
import { initialSettingsQuery } from "./database/settings/queries";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

db.exec(initialUserQuery);
db.exec(initialSettingsQuery);

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req: Request, res: Response) => {
  console.log("hello world me!");
  res.send("Express + TypeScript Server");
});

app.get("/health", async (req: Request, res: Response) => {
  console.log("hello health check");

  try {
    const users = await db.prepare("SELECT * from users");
    const settings = await db.prepare("SELECT * from settings");

    const resp = users.get();
    const settingsResp = settings.get();

    console.log("users", resp);
    console.log("settings", settingsResp);

    // res.send(resp);

    res.json({ users: resp, settings: settingsResp });
  } catch (err) {
    console.log("err - health", err);
  }
});

app.post("/user", async (req: Request, res: Response) => {
  console.log("hello set user");

  try {
    const insert = db.prepare(
      "INSERT INTO users(first_name, last_name, email) VALUES(@first_name, @last_name, @email)"
    );

    const insertMany = db.transaction((users) => {
      for (const user of users) insert.run(user);
    });

    await insertMany([
      {
        first_name: "Michael",
        last_name: "J",
        email: "michael@bulls.com",
      },
    ]);

    res.send("created user");
  } catch (err) {
    console.log("err inside user", err);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
