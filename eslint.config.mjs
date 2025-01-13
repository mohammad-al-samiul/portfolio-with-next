import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Add TypeScript-related custom rules here if necessary
      "@typescript-eslint/no-explicit-any": 0,
      "eslint-disable react-hooks/exhaustive-deps": 0,
    },
  },
];

export default eslintConfig;
