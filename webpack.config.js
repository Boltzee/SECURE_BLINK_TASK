const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "src", "index.jsx"),
	output: {
		path: path.resolve(__dirname, "output"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: ["js", "jsx"],
	},
	module: {
		rules: [
			{
				test: /\.jsx/,
				exclude: "/node_modules",
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react", "@babel/preset-env"],
					},
				},
			},
			{
				test: /\.scss/,
				exclude: "/node_modules",
				use: ["style-loader", "css-loader", "postcss-loader"], // Note that postcss loader must come before sass-loader
			},
		],
	},
	devServer: {
		contentBase: "./src",
		port: 8080,
		hot: true,
	},
};
