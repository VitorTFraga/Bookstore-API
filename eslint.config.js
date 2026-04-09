import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "package-lock.json", 
      "node_modules/", 
      "dist/", 
      ".env"
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    
    rules: {
      ...js.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    language: "json/json",
    plugins: { json },
    rules: {
      "json/no-empty-keys": "error", 
    },
  },
]);
