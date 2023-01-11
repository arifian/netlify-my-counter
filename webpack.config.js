const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv')
const webpack = require('webpack')
const path = require('path');

dotenv.config();

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
       'process.env': JSON.stringify(process.env)
    })
  ],
}
