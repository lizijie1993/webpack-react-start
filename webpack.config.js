var path = require('path');

var config = {
    entry: {
        app: [
            path.resolve(__dirname, './app/main.jsx')
        ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    module: {
        noParse: [],
        loaders: [
            {
              test: /\.jsx$/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'react']
              }
            },
            {
              test: /\.css$/,
              loader: "style!css"
            },
            {
              test: /\.less$/,
              loader: "style!css!less"
            },
            {
              test: /\.png$/,
              loader: "url?limit=100000"
            },
            {
              test: /\.jpg$/,
              loader: "file"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.less']
    }
};

module.exports = config;