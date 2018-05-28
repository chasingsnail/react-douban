const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var proxy = require("http-proxy-middleware");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "sass-loader"]
      }
    ]
  },
  
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "https://api.douban.com/v2",
        pathRewrite: { "^/api": "/" }, 
        changeOrigin: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
