import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            globals: {
                ...globals.node, // For Node.js environment
            },
            parser: tseslint.parser,
            parserOptions: {
                project: "./tsconfig.json", // Point to your tsconfig.json
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            "prettier/prettier": "error", // Enforce Prettier formatting
            "semi": ["warn", "always"], // Example rule: require semicolons
            // Add other ESLint rules as needed
        },
        ignores: ["node_modules/", "dist/", "./eslint.config.js" ], // Ignore build and dependency folders
    },
    pluginJs.configs.recommended, // Recommended JavaScript rules
    ...tseslint.configs.recommended, // Recommended TypeScript rules
    eslintConfigPrettier, // Disable ESLint rules that conflict with Prettier
];