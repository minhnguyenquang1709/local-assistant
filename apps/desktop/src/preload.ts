import { contextBridge, ipcRenderer } from "electron";
import { DataSource } from "typeorm";
import { Session } from "./entity/session.entity";

contextBridge.exposeInMainWorld("electronAPI", {
  // ipcRenderer.send: fire and forget, like event emitter
  // ipcRenderer.invoke: request-response, return Promise, so FE can await
  sendMessage: (msg: string) => ipcRenderer.invoke("chat:send", msg),
});

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "admin",
  database: "test",
  entities: [Session],
  synchronize: true,
  logging: false,
});

export async function preload() {
  // init connection to database
}
