const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode:'development',
  entry: './src/js/test.js',
  output: {
    filename: 'bundle.js',
    //publicPath:'js/',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  devServer:{
    contentBase:'dist/'
  },
  plugins:[
    new HtmlWebpackPlugin({template:'./index.html'})
  ]
};