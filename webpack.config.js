const path = require('path')
const merge = require('webpack-merge')

const commonConfig = require('./config/common')
const developmentConfig = require('./config/dev')
const productionConfig = require('./config/prod')

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
}

module.exports = (env, argv) => {
  return merge(
    commonConfig(PATHS),
    env === 'production' ? productionConfig(PATHS) : developmentConfig(PATHS)
  )
}
