let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtarctPlugin = require("mini-css-extract-plugin");
module.exports = {
  devServer: {
    //还发服起的配置
    port: 3000,
    progress: true, //进度条
    contentBase: "./build",
    compress: true
  },
  mode: "development", //生产production,开发development
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash:4].js", //打包后的文件名
    path: path.resolve(__dirname, "build") //路径必须是一个绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //模板地址
      filename: "index.html", //打包后的文件名
      minify: {
        removeAttributeQuotes: true, //删除双引号
        collapseWhitespace: true //变为一行
      },
      hash: true //添加hash戳
    }),
    new MiniCssExtarctPlugin({
      //抽离css
      filename: "main.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-withimg-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtarctPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtarctPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
