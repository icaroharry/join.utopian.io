const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        main: './src/home/index.js',
        owners: './src/owners/index.js',
        investors: './src/investors/index.js',
        rules: './src/rules/index.js',
        cookies: './src/cookies/index.js',
        privacy: './src/privacy/index.js',
        tos: './src/tos/index.js',
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?name=./img/[name].[ext]'
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        interpolate: true,
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['main'],
            template: 'src/pages/home/index.html',
            filename: '../dist/home/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['owners'],
            template: 'src/pages/owners/index.html',
            filename: '../dist/owners/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['investors'],
            template: 'src/pages/investors/index.html',
            filename: '../dist/investors/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['rules'],
            template: 'src/pages/rules/index.html',
            filename: '../dist/rules/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['rules'],
            template: 'src/pages/cookies/index.html',
            filename: '../dist/cookies/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['privacy'],
            template: 'src/pages/privacy/index.html',
            filename: '../dist/privacy/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['tos'],
            template: 'src/pages/tos/index.html',
            filename: '../dist/tos/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new CopyWebpackPlugin([{from: 'src/img', to: 'img'}]),
        new CopyWebpackPlugin([{from: 'src/preloaded.css', to: 'preloaded.css'}]),
        new LiveReloadPlugin({ appendScriptTag: true })
    ]
};