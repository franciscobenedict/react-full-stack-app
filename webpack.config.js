const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname,`src`,`app`),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath:'/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {
      "react": path.resolve("./node_modules/react"),
      "B": path.resolve(__dirname + "/src")
    },
    modules: ["node_modules"]
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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.scss$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ],
      }
    ]
  }
}
