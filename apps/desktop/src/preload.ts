import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  sendMessage: (msg: string) => ipcRenderer.invoke("chat:send", msg),
});
