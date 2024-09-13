/*const ALIASED_PACKAGES = [
  'migration',
  'firebase',
];*/

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  root: true,
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node builtin modules:
          [''],
          // Third party packages:
          ['^@?\\w'],
/*          // Aliased project packages:
          [`^(${ALIASED_PACKAGES.join('|')})(/.*|$)`],*/
          // Parent imports, with `..` first.
          ["^\\.\\./?$', '^\\.\\.(?!/?$)"],
          // Other relative imports with nested folders imports first and same folder imports last.
          ['^\\.'],
          // Side effect imports.
          ['^\\u0000'],
          // Styles import (./styles.module.scss):
          ['\\.scss$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/group-exports': 'error',
  },
};