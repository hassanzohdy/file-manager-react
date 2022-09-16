import { Express } from "express";

import fileManager from "./controllers/file-manager";

export default function listRoutes(app: Express) {
  // Let's define our routes
  // list directory nodes
  app.get("/file-manager", fileManager.list);
  // create a directory node
  app.post("/file-manager/directory", fileManager.createDirectory);
}
