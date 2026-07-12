import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/unit/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", ".next", "e2e", "tests/e2e"],
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/app/**",
        "src/cms/**",
        "src/**/*.d.ts",
        "src/components/ui/**",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(root, "./src"),
      "@payload-config": path.resolve(root, "./src/cms/payload.config.ts"),
    },
  },
});
