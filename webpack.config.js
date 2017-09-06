const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const ExtractPlugin = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
})


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  resolve : {
    alias: {
      '../../theme.config$': path.join(__dirname, 'theme/theme.config')  
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css|scss$/,
        loaders: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        loaders: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractPlugin
  ]
}