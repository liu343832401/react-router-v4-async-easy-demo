/**
 * @description:
 *
 * @author: nick
 *
 * @create: 2018-12-31 09:06
 **/
const { injectBabelPlugin } = require('react-app-rewired')
module.exports = function override (config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: 'css' }],
    config
  )
  return config
}