import { faker } from "@faker-js/faker";
import fs from "@mongez/fs";
// import it here
import { dataDirectory } from "./config";

function start() {
  make(3, 3, dataDirectory);
}

start();

function makeFiles(maxFilesPerDirectory: number, path: string) {
  const filesList: string[] = [];

  while (filesList.length < maxFilesPerDirectory) {
    const file = faker.system.fileName();
    const filePath = path + "/" + file;
    if (!filesList.includes(filePath) && !fs.isFile(filePath)) {
      filesList.push(filePath);
      fs.put(filePath, faker.lorem.paragraphs());
    }
  }
}

function make(
  maxDirectories: number,
  maxFilesPerDirectory: number,
  path: string
) {
  const directoriesList: string[] = [];

  while (directoriesList.length < maxDirectories) {
    const directory = faker.system.directoryPath().split("/")[1];
    const directoryPath = path + "/" + directory;
    if (
      !directoriesList.includes(directoryPath) &&
      !fs.isDirectory(directoryPath)
    ) {
      directoriesList.push(directoryPath);
      fs.makeDirectory(directoryPath, 777);
      makeFiles(maxFilesPerDirectory, directoryPath);
      // to make recursive directories and files, you'll need to stop the script after some time
      //   and run it again
      //   make(maxDirectories, maxFilesPerDirectory, directoryPath);
    }
  }
}
