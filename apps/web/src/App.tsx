import { useState } from "react";
import { IElectronAPI } from "shared-types";

// prevent TypeScript error for window.electronAPI (custom property for the `window` object)
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
