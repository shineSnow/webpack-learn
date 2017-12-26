const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        index:[
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, '../src/index.js'),
        ],
        vendor:['moment']
    },
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname, '../dist'),
        publicPath:'/'
    },
    resolve: {
        extensions:[".js", ".json", ".jsx", ".css"],
        alias:{}
    },
    module:{
        rules:[
            {
                test:/\.js$/,               
                use:['babel-loader'],
                exclude:path.resolve(__dirname,'../node_modules')
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'WEBPACK',
            template:'./index.html',
            inject:'body'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env' :{
                'NODE_ENV':JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor', 'manifest']
        })

    ]
}