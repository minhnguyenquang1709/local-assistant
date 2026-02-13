import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  // ipcRenderer.send: fire and forget, like event emitter
  // ipcRenderer.invoke: request-response, return Promise, so FE can await
  sendMessage: (msg: string) => ipcRenderer.invoke("chat:send", msg),
});
