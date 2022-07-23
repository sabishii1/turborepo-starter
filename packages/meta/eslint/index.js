const merge = require('deepmerge')

/** @type {import('eslint').Linter.Config} */
const defaultConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: { node: true, jest: true },
  ignorePatterns: [
    '**/.eslintrc.*',
    '**/jest.config.*',
    '**/dist/*',
    '**/coverage/*',
    '**/.turbo/*',
    '**/boilerplates/*',
    '**/generated/*',
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

function generate(
  /** @type {import('eslint').Linter.Config} */
  config,
) {
  /** @type {import('eslint').Linter.Config} */
  return config ? merge(defaultConfig, config) : defaultConfig
}

module.exports.config = defaultConfig
module.exports.generate = generate
