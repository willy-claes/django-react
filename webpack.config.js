const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      './app/index',
    ],
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('./dist/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new BundleTracker({
      filename: './webpack-stats.json',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    alias: {
      App: path.resolve(__dirname, './app'),
    },
  },
}
