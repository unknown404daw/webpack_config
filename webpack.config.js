/// <binding BeforeBuild='Run - Development' />
"use strict";

var webpack = require('./app/node_modules/webpack'),
    ExtractTextPlugin = require('./app/node_modules/extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './app/src/app.ts',
        css: './app/styles/style.js'
    },
    output: {
        filename: 'build.js',
        path: './app/dist',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["./app/node_modules"]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(
        //    {
        //        warning: false,
        //        mangle: true,
        //        comments: false
        //    }
        //),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery',
            toastr: 'toastr',
            bootstrap: 'bootstrap'
        }),
        new ExtractTextPlugin('style.min.css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize')
            },
            {
                test: /\.scss$/i,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
                //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!sass-loader')
            }, {
                test: /\.html$/,
                exclude: /app\node_modules/,
                loader: 'raw'
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }, {
                test: '\.jpg$',
                exclude: /app\node_modules/,
                loader: 'file'
            }, {
                test: '\.png$',
                exclude: /app\node_modules/,
                loader: 'url'
            }
        ]
    }
};
