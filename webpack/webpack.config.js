/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')

// to get the env passed from package.json file use fat arrow function instead of object literal
module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
