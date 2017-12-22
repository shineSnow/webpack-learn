const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express')
const app = express()







app.use(webpackDevMiddleware())






app.listen(3000,() => {
    console.log('3000,you konw')
})