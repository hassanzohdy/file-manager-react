import fs from "@mongez/fs";
import makeNode from "app/utils/node";
import { dataPath } from "app/utils/paths";
import { Request, Response } from "express";

/**
 *List directories
 */
export default async function listDirectory(
  request: Request,
  response: Response
) {
  // get the directory path from the request query string
  // let's set `/` as the default path
  const path = (request.query.path as string) || "/";
  const directoryPath = dataPath(path); // the full path to the directory

  if (!fs.isDirectory(directoryPath)) {
    return response.status(404).json({
      message: "Directory not found",
    });
  }

  // get the directory content
  const children = fs.list(directoryPath);

  return response.json({
    node: makeNode(path, children),
  });
}
