import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactNativePlugin from "eslint-plugin-react-native";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  // 1. Базовые рекомендуемые настройки
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    // 2. Настройки для файлов проекта
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Правила React Native
      "react-native/no-unused-styles": "error",
      "react-native/split-platform-components": "error",
      "react-native/no-inline-styles": "error",
      "react-native/no-color-literals": "error",
      "react-native/no-raw-text": "error",
      "react-native/no-single-element-style-arrays": "error",

      // Правила TypeScript (из вашего конфига)
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // В новых версиях ban-types заменен на более точные правила, но для совместимости:
      "@typescript-eslint/no-explicit-any": "warn",

      // Prettier
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          useTabs: true,
          semi: true,
          trailingComma: "all",
          bracketSpacing: true,
          printWidth: 100,
          endOfLine: "auto",
        },
      ],
    },
  },
  // 3. Отключаем конфликтующие правила (заменяет старый extends: ["prettier"])
  eslintConfigPrettier
);
