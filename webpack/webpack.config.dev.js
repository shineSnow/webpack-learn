const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackCommon = require('./webpack.config.common.js')


module.exports = merge(webpackCommon,{
    entry:{
        index:[
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, '../src/index.js'),
        ],
        vendor:['moment']
    },
    output:{
        filename:'[name].js',
    },
    devtool:'source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
})