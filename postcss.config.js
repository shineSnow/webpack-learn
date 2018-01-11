
module.exports = {
    plugins:[
        require('autoprefixer')(),
        require('cssnano')(),
        require('postcss-px2rem')({
            remUnit:37.5
        })
    ]
}