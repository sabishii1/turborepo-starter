const { generate } = require('../')

/** @type { import('@jest/types').Config.InitialOptions } */
module.exports = generate({ testRegex: '\\.(spec|test)\\.ts$' })
