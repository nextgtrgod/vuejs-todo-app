const path = require('path');


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
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
		inline: true,
		contentBase: './public',
		port: 9090,
        host: 'localhost'
    },

    devtool: 'cheap-eval-source-map',
    
    resolve: {
        extensions: ['.vue', '.js', '.jsx', '.json', '*'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};