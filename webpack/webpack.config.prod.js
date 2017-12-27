const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const webpackCommon = require('./webpack.config.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(webpackCommon, {
    entry:{
        index:path.resolve(__dirname, '../src/index.js'),
        vendor:['moment','jquery']
    },
    output:{
        filename: "[name].[chunkhash].js",
        publicPath:'./'
    },
    plugins:[
        new UglifyJSPlugin(),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
          })
    ]
})