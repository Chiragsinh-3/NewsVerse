import path from "path";
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
