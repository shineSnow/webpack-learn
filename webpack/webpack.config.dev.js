const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry:[
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/index.js'
    ],
    devtool:'#source-map',

    output:{
        filename:'[name].[hash].js',
        path:path.resolve(__dirname, 'dist'),
        publicPath:'/'
    },

    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:path.resolve(__dirname, 'node_modules')
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
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader']
            }
    
        ],
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'my webpack html file',
            template:'./index.html'
        })
    ]
}