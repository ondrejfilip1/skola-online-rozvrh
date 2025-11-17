import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
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
