var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: "./public",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.(css|sass|scss)$/,
				loader: ExtractTextPlugin.extract("style", "css", "sass")
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg)$/,
				loader: "url-loader"
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["public"]),
		new HtmlWebpackPlugin({
			title: "Hello World",
			template: "./src/index.ejs"
		}),
		new ExtractTextPlugin("styles.css")		
	]
};