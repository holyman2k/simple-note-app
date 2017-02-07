const webpack = require('webpack');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var build = {
    path: __dirname + "/src/main/resources/static/"
}

module.exports = {
    context: path.join(__dirname, "src/react/src"),
    devtool: "inline-sourcemap",
    entry: "./app/main.jsx",

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },
    output: {
        path: build.path,
        filename: "main.min.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyWebpackPlugin([
            { from: 'public/', to: build.path + '/public/' },
            { from: 'index.html', to: build.path + '/index.html' },
        ]),
    ]
};