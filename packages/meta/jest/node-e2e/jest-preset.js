const { generate } = require('../')

/** @type { import('@jest/types').Config.InitialOptions } */
module.exports = generate({ testRegex: '\\.e2e-(spec|test)\\.ts$' })
