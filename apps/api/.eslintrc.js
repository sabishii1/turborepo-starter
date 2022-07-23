const { generate } = require('@app/meta/eslint')

/** @type {import('eslint').Linter.Config} */
module.exports = generate({ parserOptions: { project: __dirname + '/tsconfig.json' } })
