const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackCommon = require('./webpack.config.common.js')


module.exports = merge(webpackCommon,{
    devtool:'source-map',
})