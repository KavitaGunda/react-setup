/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'production',
  devtool: 'source-map', // property controls the generation of source maps

  plugins: [
    // setting custom env variables
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Gunda'),
    }),
    new BundleAnalyzerPlugin(),
  ],
}
