import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req: Request, res: Response) => {
  console.log("hello world me!");
  res.send("Express + TypeScript Server");
});

app.get("/health", (req: Request, res: Response) => {
  console.log("hello health check");
  res.send("I am healthy");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
