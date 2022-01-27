/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  // allows us to  leave off the file extension from importing
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // we are instructing webpack to load all tsx ts, jsx, js files using babel-loader
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource', // In webpack version 5 we don't need to install file-loader separately this module of webpack v5 does the same job
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline', // for fonts and svg this module is used in webpack v5 instead of installing url-loader in the older version
      },
    ],
  },
  // we are instructing to set the bundled output file in this path
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  // mode: 'development',
  //we are asking the bundler to set the html file in build folder
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    // copy the static contents of source to dest folder or build folder
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', './src/staticFolder'),
          to: path.resolve(__dirname, '..', './build/staticFolder'),
        },
      ],
    }),
  ],
}
