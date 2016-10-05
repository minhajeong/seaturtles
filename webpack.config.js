var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/src/index.js',
 
    output: {
        path:__dirname + '/client/public/',
        filename: 'bundle.js'
    },
 
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/client/public/'
    },
 
    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                },
                { 
                    test: /\.css$/, 
                    loader: "style-loader!css-loader" 
                },
                { 
                    test: /\.png$/, 
                    loader: "url-loader?limit=100000" 
                },
                { 
                    test: /\.jpg$/, 
                    loader: "file-loader" 
                },
                {
                    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                    loader: 'url?limit=10000&mimetype=application/font-woff'
                 },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                    loader: 'url?limit=10000&mimetype=application/octet-stream'
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                    loader: 'file'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                    loader: 'url?limit=10000&mimetype=image/svg+xml'
                }
             ]
        }
};
