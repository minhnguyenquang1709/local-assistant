import { useState } from "react";
// Import interface để TypeScript hiểu window.electronAPI là gì
import { IElectronAPI } from "shared-types";

// Hack TypeScript để nó không báo lỗi property electronAPI không tồn tại trên window
declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

function App() {
  const [response, setResponse] = useState("");

  const handleChat = async () => {
    if (window.electronAPI) {
      const reply = await window.electronAPI.sendMessage("Hello Backend");
      setResponse(reply);
    } else {
      alert(
        "Không tìm thấy Electron API! Bạn đang chạy trên trình duyệt thường?"
      );
    }
  };

  return (
    <div>
      <h1>Local Assistant</h1>
      <button onClick={handleChat}>Ping Backend</button>
      <p>Backend says: {response}</p>
    </div>
  );
}
export default App;
