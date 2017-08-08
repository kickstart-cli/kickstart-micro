const serviceName = process.env.SERVICE_NAME || 'micro-api'
const port = process.env.PORT || 9999
const logLevel = process.env.LOG_LEVEL || 'debug'
const nodeEnv = process.env.NODE_ENV || 'development'

const isDev = nodeEnv === 'development'
const isNotDev = nodeEnv !== 'development'
const isStage = nodeEnv === 'staging'
const isProd = nodeEnv === 'production'
module.exports = {
  serviceName,
  port,
  logLevel,
  nodeEnv,
  isDev,
  isNotDev,
  isStage,
  isProd
}
