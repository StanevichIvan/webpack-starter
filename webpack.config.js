const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetsConfig = require('./build-utils/loadPresets');

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => (
    webpackMerge({
            mode,
            entry: path.join(__dirname, 'src/index.tsx'),
            output: {
                filename: "bundle.js"
            },
            module: {
                rules: [
                    {
                        test: /\.(js|ts?x)$/i,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                    {
                        test: /\.(png|jpe?g|gif)$/i,
                        use: [{
                            loader: 'url-loader',
                            options: {
                                limit: 5000
                            }
                        }],
                    },
                ],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: path.join(__dirname, 'src/index.html')
                }),
                new webpack.ProgressPlugin()
            ]
        },
        modeConfig(mode),
        presetsConfig({ mode, presets }),
    )
);
