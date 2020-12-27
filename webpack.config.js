const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";

console.log(`Environment: ${isDev ? "development" : "production"}`);

module.exports = {
  entry: "./index.js",
  mode: isDev ? "development" : "production",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    compress: true,
    open: true,
    host: "localhost",
    port: process.env.CLIENT_PORT,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    // stats: "minimal", // Use if less information is required -> https://webpack.js.org/configuration/dev-server/#devserverstats-
  },
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, "src/actions/"),
      Atoms: path.resolve(__dirname, "src/components/atoms"),
      Rows: path.resolve(__dirname, "src/components/rows"),
      Assets: path.resolve(__dirname, "src/assets/"),
      Helpers: path.resolve(__dirname, "src/helpers/"),
      Api: path.resolve(__dirname, "src/api/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|sass|scss|less)$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resourcePath) =>
                  resourcePath.indexOf("assets/stylesheets") === -1,
                localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
                // getLocalIdent: (context, localIdentName, localName, options) => {
                //   return "whatever_random_class_name";
                // },
              },
              sourceMap: isDev,
            },
          },
          "sass-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: isDev,
              },
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_SERVER_URL: JSON.stringify(process.env.API_SERVER_URL),
      },
    }),
  ],
  devtool: isDev ? "source-map" : false,
};
