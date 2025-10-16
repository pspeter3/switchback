/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  plugins: [tailwindcss()],
  test: {
    environment: "happy-dom",
    globals: true,
    coverage: {
      enabled: true,
      exclude: [...coverageConfigDefaults.exclude, "src/main.tsx"],
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  },
});
