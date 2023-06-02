const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/index.js'),
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, "../dist"),
        },
        hot: true,
        port: 8080
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "main.js"
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index1.html"
        })
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
            }
        ]
    }
};