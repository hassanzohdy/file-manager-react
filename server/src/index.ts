// imported express server
import cors from "cors";
import express, { Express } from "express";
import listRoutes from "./routes";

// port to run the server
const port = 8001;

// create express app
const app: Express = express();

// add json parser
app.use(express.json());

// allow cors
app.use(cors());

// list call our routes list
listRoutes(app);

// start the Express server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
