import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["relay", "@emotion/babel-plugin", "babel-plugin-macros"],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: "/src/entry-client.tsx",
    },
    chunkSizeWarningLimit: 800,
    sourcemap: true,
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  ssr: command === "build" ? { noExternal: /(relay|react-use)/ } : {},
}));
