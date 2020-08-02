const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssLoader = require('./build-utils/loadStyles');

require('dotenv').config();

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetsConfig = require('./build-utils/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) =>
  webpackMerge(
    {
      mode,
      entry: path.join(__dirname, 'src/index.tsx'),
      output: {
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.(js|ts?x)$/i,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: [/\.css$/, /\.scss$/],
            use: [
              'style-loader',
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  // sourceMap: true,
                  import: false,
                },
              },
              postcssLoader,
            ],
          },
          {
            test: /\.(svg|png|ttf|eot|woff|woff2|otf)$/,
            loader: 'file-loader',
            options: {
              name: `[name].[ext]`,
            },
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src/index.html'),
        }),
        // new webpack.DefinePlugin({
        //   ENV_VARIABLE: JSON.stringify(
        //     process.env.ENV_VARIABLE,
        //   ),
        // }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode),
    presetsConfig({ mode, presets }),
  );
