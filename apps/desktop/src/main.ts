import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Trỏ vào file đã build
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Nếu đang dev thì load localhost, nếu build rồi thì load file
  // Biến môi trường này do mình tự quy định hoặc check isPackaged
  if (process.env.NODE_ENV !== "production") {
    win.loadURL("http://localhost:3000");
  } else {
    win.loadFile(path.join(__dirname, "../../web/dist/index.html"));
  }
};

app.whenReady().then(() => {
  // Đăng ký sự kiện lắng nghe từ Frontend
  ipcMain.handle("chat:send", async (_, msg) => {
    console.log("Frontend gửi:", msg);
    return `Backend received: ${msg} - Pong!`;
  });

  createWindow();
});
