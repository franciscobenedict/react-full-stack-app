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
      },
      // {
      //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   include: SRC,
      //   use: [{
      //       loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      //   }],
      // },
      // {
      //   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   include: SRC,
      //   use: [{
      //       loader: 'file-loader'
      //   }]
      // },
      {
        test: /\.(otf|eot|woff|woff2|ttf)$/,
        loader: 'file-loader?limit=30000&name=[name]-[hash].[ext]'
      },

      // {
      //   test: /\.(jpg|png|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[path][name].[hash].[ext]',
      //   }
      // },

      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        }
      },

      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/,
      //   loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
      // },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif|tiff)$/,
      //   use: [
      //     'file-loader?name=images/[name].[ext]'
      //   ]
      // },

      // {
      //   test: /\.(jpg|png)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit: 25000,
      //     }
      //   }
      // },
      // {
      //   loader: "resolve-url-loader",
      //   options: {
      //     sourceMap: true
      //   }
      // }
    ]
  }
}
