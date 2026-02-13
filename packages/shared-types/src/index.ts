/**
 * API contract b/w React & Electron
 */
export interface IElectronAPI {
  /**
   * Send message to Electron backend and optionally attach data
   * @param msg message
   * @param data an object of arbitrary structure
   * @returns
   */
  sendMessage: (msg: string, data?: object) => Promise<string>;
}

export * from "./table-name";
