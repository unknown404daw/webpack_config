'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        js: './src/app.js',
        css: './style/css.js'
    },
    output: {
        path: './bin',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { 
                test: /\.scss$/i, 
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
};
