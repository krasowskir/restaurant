const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      fname: "das gibts doch gar nciht!",
      logo: "Pastacasa",
      template: "./views/layout.ejs"
    })
  ]
};
