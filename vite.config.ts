import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/sol-proxy": {
        target: "https://aplikace.skolaonline.cz",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/sol-proxy/, ""),
      },
    },
  },
});
