// imported express server
import express, { Express, Request, Response } from "express";

// port to run the server
const port = 8001;

// create express app
const app: Express = express();

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to File Manager");
});

// start the Express server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
