export default interface FileManagerServiceInterface {
  /**
   * List directory contents for the given path
   */
  list(directoryPath: string): Promise<any>;

  /**
   * Create new directory
   *
   * First parameter will be the directory name,
   * second parameter will be the directory path that will be created into.
   */
  createDirectory(directoryName: string, saveTo: string): Promise<any>;

  /**
   * Delete directories/files
   */
  delete(paths: string[]): Promise<any>;

  /**
   * Rename directory | file
   *
   * The first parameter will be the old path,
   * the second parameter will be the new path.
   */
  rename(path: string, newPath: string): Promise<any>;

  /**
   * Copy the given files/directories to the given destination
   */
  copy(paths: string[], destination: string): Promise<any>;

  /**
   * Move the given files/directories to the given destination
   */
  move(paths: string[], destination: string): Promise<any>;

  /**
   * Upload the given files into the given directory path
   */
  upload(files: File[], directoryPath: string): Promise<any>;
}
