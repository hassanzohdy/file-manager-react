import endpoint from "@mongez/http";
import FileManagerServiceInterface from "../types/FileManagerServiceInterface";

export class FileManagerService implements FileManagerServiceInterface {
  /**
   * {@inheritDoc}
   */
  public list(directoryPath: string): Promise<any> {
    console.log(directoryPath);

    return endpoint.get("/file-manager", {
      params: {
        path: directoryPath,
      },
    });
  }

  /**
   * {@inheritDoc}
   */
  public createDirectory(directoryName: string, saveTo: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  /**
   * {@inheritDoc}
   */
  public delete(paths: string[]): Promise<any> {
    throw new Error("Method not implemented.");
  }
  /**
   * {@inheritDoc}
   */
  public rename(path: string, newPath: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  /**
   * {@inheritDoc}
   */
  public copy(paths: string[], destination: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  /**
   * {@inheritDoc}
   */
  public move(paths: string[], destination: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  /**
   * {@inheritDoc}
   */
  public upload(files: File[], directoryPath: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

const fileManagerService = new FileManagerService();

export default fileManagerService;
