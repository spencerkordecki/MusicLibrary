var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.common.js',
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$|\.sass$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};