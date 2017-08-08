const logger = require('@therebel/log')
const { serviceName, logLevel, nodeEnv } = require('../settings.js')

module.exports = logger({ name: `${serviceName} [${nodeEnv}]`, level: logLevel, env: nodeEnv })
