import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha
      }
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": ["warn"],
      "no-undef": "error",
      "no-console": "off",
      "no-mixed-spaces-and-tabs": "error",
      "no-trailing-spaces": "warn",
      "eol-last": ["warn", "always"],
      "no-await-in-loop": "off"
    }
  },
]);
