import concatRoute from "@mongez/concat-route";
import fs from "@mongez/fs";
import makeNode from "app/utils/node";
import { dataPath } from "app/utils/paths";
import { Request, Response } from "express";

/**
 * Create a directory
 */
export default async function createDirectory(
  request: Request,
  response: Response
) {
  // Get the directory name that will be created, also get the path of the directory
  const { name, path } = request.body;

  // now validate the name and path
  if (!name) {
    return response.status(400).json({
      error: "Directory name is required",
    });
  }

  if (!path) {
    return response.status(400).json({
      error: "Directory path is required",
    });
  }

  // check if the path is located in the directory path
  const fullPath = dataPath(path);

  // check if the directory exists
  if (!fs.isDirectory(fullPath)) {
    return response.status(400).json({
      error: "The path is not a directory",
    });
  }

  // check if the directory already exists
  const directoryPath = concatRoute(path, name);

  const directoryFullPath = dataPath(directoryPath);

  if (fs.isDirectory(directoryFullPath)) {
    return response.status(400).json({
      error: "The directory already exists",
    });
  }

  // now create the directory
  fs.makeDirectory(directoryFullPath);

  // return the directory as node
  return response.json({
    node: makeNode(directoryPath),
  });
}
