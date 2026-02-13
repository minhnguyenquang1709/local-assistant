import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts", "src/preload.ts"], // Đầu vào
  outDir: "dist", // Đầu ra
  format: ["cjs"], // CommonJS (Node.js chuẩn)
  clean: true,
  shims: false,
  external: ["electron"], // Quan trọng: Không bundle electron vào file js
});
