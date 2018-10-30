const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
require("@babel/polyfill");

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.join( __dirname, "build" ),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
    new HtmlWebPackPlugin({
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' }
    ]),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/)
  ]
}