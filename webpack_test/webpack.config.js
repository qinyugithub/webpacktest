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
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体
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
        //可以使用传参的方式来配置loader: use:'url-loader?limit=7631&name=[hash:8]-[name].[ext]'
      },
      { test:/\.js$/, use:'babel-loader',exclude: /node_modules/ }
    ]
  },
  devServer:{
    open:true,
    port:3000,
    // contentBase:'dist/',
    hot:true
  },
  plugins:[
    new HtmlWebpackPlugin({template:'./index.html'})
  ],
  // resolve: {
  //   alias:{
  //     "vue$":"vue/dist/vue.js"
  //   }
  // }
};