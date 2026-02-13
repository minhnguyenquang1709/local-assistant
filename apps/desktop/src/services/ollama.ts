import { Ollama } from "ollama";
class OllamaService {
  private ollama: Ollama;
  constructor() {
    this.ollama = new Ollama({
      host: "http://localhost:11434",
    });
  }
}

export const ollamaService = new OllamaService();
