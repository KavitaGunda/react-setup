/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
  mode: 'development',

  // hot module replacement / react refresh
  devServer: {
    hot: true,
    // open: true, // dev server --open flag can be set from here as well
  },
  devtool: 'cheap-module-source-map', // property controls the generation of source maps

  plugins: [
    // setting your own custom env variable
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Kavita'),
    }),
    // react refresh
    new ReactRefreshWebpackPlugin(),
  ],
}
