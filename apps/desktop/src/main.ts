import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // point to preload script file
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // load URL or built file of the frontend
  // dev load localhost, built load file
  if (process.env.NODE_ENV !== "production") {
    win.loadURL("http://localhost:3000");
  } else {
    win.loadFile(path.join(__dirname, "../../web/dist/index.html"));
  }

  app.on("window-all-closed", () => {
    app.quit();
  });
};

app.whenReady().then(() => {
  // register event from FE
  ipcMain.handle("chat:send", async (_, msg) => {
    console.log("Frontend gửi:", msg);
    return `Backend received: ${msg} - Pong!`;
  });

  createWindow();
});
