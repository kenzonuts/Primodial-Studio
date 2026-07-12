import type { Config } from "prettier";

/**
 * Prettier config for Primordial Studio.
 * Tailwind class sorting is handled by prettier-plugin-tailwindcss.
 */
const config: Config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/styles/globals.css",
  tailwindFunctions: ["cn", "cva"],
};

export default config;
