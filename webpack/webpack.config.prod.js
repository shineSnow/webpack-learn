const merge = require('webpack-merge')
const webpackCommon = require('./webpack.config.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(webpackCommon, {
    plugins:[
        new UglifyJSPlugin({
            sourceMap:false
        })
    ]
})