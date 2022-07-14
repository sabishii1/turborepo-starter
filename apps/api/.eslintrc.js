/** @type {import('eslint').ESLint.Options} */
module.exports = {
  ...require('@app/meta/eslint/app.js'),
  parserOptions: {
    project: __dirname + '/tsconfig.json',
    sourceType: 'module',
  },
}
