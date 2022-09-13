import FileManagerServiceInterface from "../types/FileManagerServiceInterface";
import fetchNode from "../utils/helpers";

export class FileManagerService implements FileManagerServiceInterface {
  /**
   * {@inheritDoc}
   */
  public list(directoryPath: string): Promise<any> {
    return new Promise(resolve => {
      resolve({
        data: {
          node: fetchNode(directoryPath),
        },
      });
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
