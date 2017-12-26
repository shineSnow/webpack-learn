const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:{
        index:['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true','./src/index.js']
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'dist'),
        publicPath:'/'
    },
    devtool:'#source-map',
    module:{
        rules:[
            {
                test:/\.js$/,               
                use:['babel-loader'],
                exclude:path.resolve(__dirname,'node_modules')
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
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

    ]
}