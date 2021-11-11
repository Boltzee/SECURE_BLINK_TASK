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
};
