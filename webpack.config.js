const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    filename: "bundle.js",
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
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      logo: "Pastacasa",
      template: "./views/layout.ejs"
    })
  ]
};
