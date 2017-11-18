const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

const ExtractPlugin = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
})

const ASSET_PATH = process.env.ASSET_PATH || '/';

const DefinePlugin = new webpack.DefinePlugin({
  'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
})


module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: [
      './assets/lib/fontawesome/solid.min.js',
      './assets/lib/fontawesome/brands.min.js',
      './assets/lib/fontawesome/fontawesome.min.js',
      './index.js'
    ]
  },
  output: {
    publicPath: ASSET_PATH,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve : {
    alias: {
      '../../theme.config$': path.join(__dirname, 'theme/theme.config')
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // include: __dirname + '/src',
        include: path.join(__dirname, '/src'),
        loader: 'babel-loader',
        query: {
            presets: ['react','es2015']
        }
      },
      {
        test: /\.css|(sass|scss)$/,
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
    ExtractPlugin,
    DefinePlugin
  ]
}