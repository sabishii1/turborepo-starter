/** @type {import('eslint').ESLint.Options} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: { node: true, jest: true },
  ignorePatterns: [
    '**/.eslintrc.*',
    '**/dist/*',
    '**/coverage/*',
    '**/.turbo/*',
    '**/boilerplates/*',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions', 'constructors'] }],
    '@typescript-eslint/no-namespace': [
      'warn',
      { allowDeclarations: true, allowDefinitionFiles: true },
    ],
  },
}
