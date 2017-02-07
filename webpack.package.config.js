var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var build = {
    path: __dirname + "/src/main/resources/static/"
}
module.exports = {
    context: path.join(__dirname, "src/react/src"),
    devtool: null,
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
            }
        ]
    },
    output: {
        path: __dirname + "/build/",
        filename: "main.min.js"
    },
    plugins:
        [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
            new CopyWebpackPlugin([
                { from: 'public/', to: 'public/' },
                { from: 'index.html', to: 'index.html' },
            ]),
        ],
};