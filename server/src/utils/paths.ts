import { ltrim } from "@mongez/reinforcements";
import path from "path";
import { dataDirectory } from "../config";

export function dataPath(relativePath: string): string {
  relativePath = ltrim(relativePath, "/");
  return path.resolve(dataDirectory, relativePath);
}
