const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: path.resolve(__dirname, 'src/index.jsx'),
	output: {
		path: path.resolve(__dirname, '.tmp/public'),
		filename: 'app.bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	plugins: []
};