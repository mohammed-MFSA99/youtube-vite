import { defineConfig } from "vite";
import { resolve } from "path";
import { Channel } from "diagnostics_channel";

export default defineConfig({
  base: "./youtube-vite/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        channel: resolve(__dirname, "channel.html"),
        watch: resolve(__dirname, "watch.html"),
        login: resolve(__dirname, "login.html"),
        signup: resolve(__dirname, "signup.html"),
        "search-results": resolve(__dirname, "search-results.html"),
        "history-log": resolve(__dirname, "history-log.html"),
        "forget-my-password": resolve(__dirname, "forget-my-password.html"),
      },
    },
  },
});
