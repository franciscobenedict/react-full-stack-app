const path = require("path");
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('isDevelopment', isDevelopment);

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname,`src`,`app`),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath:'/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }, {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ]
}
