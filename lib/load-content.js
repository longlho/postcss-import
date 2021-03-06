'use strict'

const readCache = require('read-cache')

/**
 * Read file cache
 * @param {string} filename file name
 * @param {Object} opts whether to read sync
 * @returns {string} file content (UTF-8 encoded)
 */
module.exports = (filename, opts) => readCache.sync(filename, 'utf-8')
