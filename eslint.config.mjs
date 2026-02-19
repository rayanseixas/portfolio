import pluginQuery from '@tanstack/eslint-plugin-query';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import importHelpersPlugin from 'eslint-plugin-import-helpers';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      'import-helpers': importHelpersPlugin,
      prettier: prettierPlugin,
      '@tanstack/query': pluginQuery,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-unused-vars': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            ['/^react/', '/^next/', '/^@next/'],
            ['module'],
            [
              '/^@/components/',
              '/^@/contexts/',
              '/^@/data/',
              '/^@/hooks/',
              '/^@/pages/',
              '/^@/store/',
              '/^@/templates/',
              '/^@/utils/',
              '/^@/lib/',
            ],
            ['parent', 'sibling', 'index', '/assets/'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'jest.config.js',
    'jest.setup.js',
    '__mocks__/**',
    'tests/**',
    '**/*.test.ts',
    '**/*.test.tsx',
  ]),
]);

export default eslintConfig;
