const webpackConfig = require('../../webpack.config.js');

module.exports = function(grunt) {

	grunt.config.set('webpack', {
		dev: Object.assign({
			watch: false,
			mode: 'development',
			devtool: 'inline-source-map'
		}, webpackConfig),
		prod: webpackConfig,
	})

	grunt.loadNpmTasks('grunt-webpack');
};