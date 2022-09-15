// imported express server
import express, { Express } from "express";
import listRoutes from "./routes";

// port to run the server
const port = 8001;

// create express app
const app: Express = express();

// list call our routes list
listRoutes(app);

// start the Express server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
