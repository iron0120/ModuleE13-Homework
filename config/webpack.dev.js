const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "main.js"
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new ESLintPlugin(),
        new StylelintPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.pug",
            filename: "index.html"
        }),
    ],
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    }
};