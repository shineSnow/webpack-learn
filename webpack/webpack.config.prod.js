const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackCommon = require('./webpack.config.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(webpackCommon, {
    output:{
        filename: "[name].[chunkhash].js",
        publicPath:'./'
    },
    plugins:[
        new UglifyJSPlugin()
    ]
})