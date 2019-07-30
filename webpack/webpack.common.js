require('dotenv').config();

const webpack = require("webpack");
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const appRoot = path.dirname(__dirname);
const src = path.join(appRoot, 'src');

module.exports = {
  context: src,
  entry: {
    app: './index.js',
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      app: src,
      assets: path.join('assets'),
      components: path.join('components'),
    },
    extensions: ['.js'],
    modules: [src, 'node_modules'],
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
      chunksSortMode: (a, b) => ((a.names[0] < b.names[0]) ? 1 : -1),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, '../src/assets'), to: 'assets' }
    ]),
    new webpack.DefinePlugin({
      "process.env": {
        BASE_URL: JSON.stringify("/"),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PRISMIC_SECRET: JSON.stringify(process.env.PRISMIC_SECRET),
      }
    })
  ]
}
