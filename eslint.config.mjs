// This file intentionally has .mjs extension to be ignored by GodotJS plugin

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { importX } from 'eslint-plugin-import-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
    },
  },
  tseslint.configs.recommended,
  eslintConfigPrettier,
  // @ts-expect-error Plugin compatibility
  importX.flatConfigs.recommended,
  // @ts-expect-error Plugin compatibility
  importX.flatConfigs.typescript,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'import-x/core-modules': ['godot', 'godot.annotations'],
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'import-x/no-named-as-default-member': 'off',
      // 'import-x/no-unresolved': ['error', { }],
      'import-x/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          // TODO: to configure
          // pathGroups: [
          //   {
          //     pattern: '@tft-roller',
          //     group: 'external',
          //     position: 'after',
          //   },
          //   {
          //     pattern: '@src/**',
          //     group: 'parent',
          //     position: 'before',
          //   },
          // ],
          pathGroupsExcludedImportTypes: ['builtin'],
          distinctGroup: false,
        },
      ],
    },
  },
]);
