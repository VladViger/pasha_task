'use strict';

const options  = require('yargs').argv;
const NODE_ENV = process.env.NODE_ENV || 'development';

const rimraf = require('rimraf');
const { resolve } = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin   = require('write-file-webpack-plugin');
const autoprefixer = require('autoprefixer');

let babelLoaderOptions = {
	presets: [
		[
			'es2015', {'modules': false}
		],
		'stage-2',
		'react'
	],
	plugins: []
};

let config = {
	context: resolve(__dirname, 'src'),
	entry: [
		'./main'
	],

	output: {
		path: resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'js/[name].js'
	},

	resolve: {
		 extensions: ['.js', '.json', '.jsx']
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				include: resolve(__dirname, 'src'),
				options: babelLoaderOptions
			},
			{
				test: /\.(css|less)$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: [
						{
							loader: 'css-loader',
							query: {
								importLoaders: 1,
								sourceMap: true,
								minimize: NODE_ENV == 'production'
							}
						},
						{
							loader: 'postcss-loader'
							//see options in LoaderOptionsPlugin
						},
						{
							loader: 'less-loader'
						}
					]
				})
				//include: resolve(__dirname, 'src', 'node_modules')
			},
			{
				test:   /\.(ttf|eot|woff|woff2)$/,
				loader: 'file-loader',
				include: resolve(__dirname, 'src'),
				options: {
					name: '[path][name].[ext]'
				}
			},
			{
				test:   /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				include: resolve(__dirname, 'src'),
				options: {
					name: '[path][name].[ext]',
					limit: 4000
				}
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},

	plugins: [
		{
			apply: (compiler) => {
				rimraf.sync(compiler.options.output.path);
			}
		},
		new ExtractTextPlugin({
			filename: 'css/[name].css',
			disable: options.hot,
			allChunks: true
		}),
		new webpack.LoaderOptionsPlugin({
			test: /\.(css|less)$/,
			options: {
				context: __dirname,
				postcss: [
					autoprefixer({ browsers: ['> 3%', 'last 2 versions'] })
				]
			}
		}),
		new HtmlWebpackPlugin({
			inject: false,
			template: 'static/index.ejs',
			filename: 'index.html'
		}),
		new CopyWebpackPlugin([
			{
				context: 'static',
				from: 'favicons/**/*',
				to: 'images'
			}
		]),
		new webpack.NoEmitOnErrorsPlugin()
	],

	devServer: {
		host: 'localhost',
		port: 3000,
		// hot: options.hot,
		inline: true,
		contentBase: resolve(__dirname, 'public'),
		historyApiFallback: true,
		stats: 'minimal'
	}
};

config.devtool = 'source-map'; // make sourcemaps as separated files

if (NODE_ENV === 'production') {
	config.plugins.push( new webpack.optimize.UglifyJsPlugin({ sourceMap: true }) );
}

if (options.hot) {
	babelLoaderOptions.plugins.push( 'react-hot-loader/babel' );
	config.entry.unshift( 'react-hot-loader/patch' );
	// config.plugins.push( new webpack.HotModuleReplacementPlugin() );
	config.plugins.push( new webpack.NamedModulesPlugin() );
	config.plugins.push( new WriteFilePlugin({ log: false }) ); // write ./public directory on disk forcely
}

module.exports = config;