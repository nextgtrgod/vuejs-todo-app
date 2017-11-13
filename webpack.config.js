const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env'],
                            plugins: [
                                ['transform-class-properties', { 'spec': true }]
                            ]
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: ('styles.css')
        }),
        new UglifyJSPlugin({
            uglifyOptions: {
                ie8: false,
                ecma: 5,
                compress: {
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true
                },
                output: {
                    comments: false,
                    beautify: false
                }
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],

    devServer: {
		inline: true,
		contentBase: './public',
		port: 9090,
        host: '0.0.0.0'
    },

    // devtool: 'cheap-eval-source-map',
    devtool: 'cheap-module-source-map',
    
    resolve: {
        extensions: ['.vue', '.js', '.jsx', '.json', '*'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};