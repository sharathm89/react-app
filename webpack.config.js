const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV ? true : false;
// const isDev = false;

module.exports = {
  entry: "./src/index.js",
  mode: isDev ? "development" : "production",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: true,
    host: "localhost",
    compress: true,
    port: process.env.CLIENT_PORT,
    hot: true,
    quiet: false
  },
	resolve: {
		alias: {
			// Actions: path.resolve(__dirname, "src/actions/"),
			// Components: path.resolve(__dirname, "src/components/"),
			Assets: path.resolve(__dirname, "src/assets/"),
			// Routes: path.resolve(__dirname, "src/routes/"),
			// Constants: path.resolve(__dirname, "src/constants/"),
			// Helpers: path.resolve(__dirname, "src/helpers/"),
      // Api: path.resolve(__dirname, "src/api/"),
		}
	},
  module: {
    rules: [{
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
                localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
              },
              sourceMap: isDev
            }
          },
          "sass-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: isDev,
              },
              sourceMap: isDev
            },
          },
        ],
      },
      {
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
					{
						loader: "url-loader"
					}
				]
			},
			{
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
					{
						loader: "url-loader"
					}
				]
			}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_SERVER_URL: JSON.stringify(process.env.API_SERVER_URL),
      },
    }),
  ],
  devtool: isDev ? "source-map" : "eval-cheap-source-map",
};
