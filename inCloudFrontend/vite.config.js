import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // optional: you can explicitly pass content paths here,
      // otherwise configure in tailwind config or leave defaults
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    }),
  ],
});
