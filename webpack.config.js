const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    home: path.resolve(__dirname, "src/entrypoints/app.js"),
    about: path.resolve(__dirname, "src/entrypoints/about.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.ejs$/,
        use: "ejs-compiled-loader"
      },
      {
        test: /\.(jpg|jpeg|gif|svg|png)$/,
        use: "url-loader"
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  },
  devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      logo: "Pastacasa",
      filename: "main.html",
      template: "./views/layout.ejs"
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./views/about.ejs"
    })
  ]
};
