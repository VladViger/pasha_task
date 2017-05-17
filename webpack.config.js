'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const options  = require('yargs').argv;

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
		filename: (options.hot) ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js'
	},

	resolve: {
		 extensions: ['.js', '.json', '.jsx']
	},

	devtool: (NODE_ENV === 'production') ? 'source-map' : 'cheap-source-map',

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
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								sourceMap: true,
								minimize: (NODE_ENV === 'production')
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
			},
			{
				test:   /\.(ttf|eot|woff|woff2|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]'
				}
			},
			{
				test:   /\.(png|jpg|gif)$/,
				loader: 'url-loader',
				include: resolve(__dirname, 'src'),
				options: {
					name: '[path][name]-[hash:8].[ext]',
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
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: ({ context }) => context && context.indexOf('node_modules') !== -1
		}),
		new webpack.optimize.CommonsChunkPlugin({ 
			name: 'manifest',
			minChunks: Infinity
		}),
		new ExtractTextPlugin({
			filename: 'css/[name]-[contenthash:8].css',
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
		hot: options.hot,
		inline: true,
		contentBase: resolve(__dirname, 'public'),
		historyApiFallback: true,
		stats: 'minimal'
	}
};

if (NODE_ENV === 'production') {
	config.plugins.push( new webpack.optimize.UglifyJsPlugin({ sourceMap: true }) );
	config.plugins.push( new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production')
	}));
}

if (options.hot) {
	babelLoaderOptions.plugins.push( 'react-hot-loader/babel' );
	config.entry.unshift( 'react-hot-loader/patch' );
	config.plugins.push( new webpack.NamedModulesPlugin() );
	config.plugins.push( new WriteFilePlugin({ log: false }) );
}

module.exports = config;