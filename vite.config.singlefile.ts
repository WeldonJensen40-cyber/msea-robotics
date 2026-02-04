import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteSingleFile } from "vite-plugin-singlefile";

// 专门用于单文件预览的配置
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteSingleFile(), // 这个插件会将所有 CSS 和 JS 注入到 HTML 中
  ],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000, // 确保所有资源都被内联
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
