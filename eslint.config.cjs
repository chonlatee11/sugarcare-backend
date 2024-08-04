const { ESLint } = require('eslint');
const typescriptEslintParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
    {
        ignores: ['node_modules/**', 'dist/**', 'build/**', 'pg_data/**'],
    },
    {
        files: ['src/**/*.{js,ts}'],
        languageOptions: {
            parser: typescriptEslintParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...eslintConfigPrettier.rules,
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            'prettier/prettier': 'error',
        },
    },
];
