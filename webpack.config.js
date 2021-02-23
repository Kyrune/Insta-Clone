const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: 'development',
  resolve: {
    fallback: {
      'path': require.resolve('path-browserify'),
      'fs': false,
      'tls': false,
      'net': false,
      'path': false,
      'zlib': false,
      'http': false,
      'https': false,
      'stream': false,
      'crypto': false,
      'crypto-browserify': require.resolve('crypto-browserify')
    }
  },
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new NodePolyfillPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};