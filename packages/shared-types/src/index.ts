// api contract b/w React & Electron
export interface IElectronAPI {
  sendMessage: (msg: string) => Promise<string>;
}