const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    devtool:'#source-map',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
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
            title:'webpack-learn',
            template:'./index.html'
        })
    ]
}