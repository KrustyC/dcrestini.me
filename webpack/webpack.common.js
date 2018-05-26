const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, '../src/index.js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(css|scss|sass|less)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      app: path.join(__dirname, '../src/app/'),
      layouts: path.join(__dirname, '../src/views/layouts/'),
      pages: path.join(__dirname, '../src/app/pages/'),
      uikit: path.join(__dirname, '../src/uikit/')
    },
    extensions: ['.js', '.jsx']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, '../src/assets'), to: 'assets' }
    ])
  ]
}
