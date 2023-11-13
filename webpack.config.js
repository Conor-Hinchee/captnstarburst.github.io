/* eslint-disable no-undef */
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/js/index.js',
        blocking: './src/js/blocking.js',
    },
    plugins: [new ESLintPlugin()],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(svg)$/i,
            type: 'asset',
        },
        ]
    },
};