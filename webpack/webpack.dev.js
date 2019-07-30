const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const appRoot = path.dirname(__dirname);
const src = path.join(appRoot, 'src');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(appRoot, 'build'),
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    publicPath: '/',
    port: process.env.DEV_PORT,
    host: process.env.HOST,
    hotOnly: true,
  },
});
