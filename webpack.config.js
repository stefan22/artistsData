const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  console.log(env);
  return {
    mode: env.mode,
    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    },
    context: __dirname,
    entry: './src/index.js',
    output: {
      filename: './bundle.js',
          path: path.resolve(__dirname, 'dist'),
      publicPath: '',
    },
    optimization: {
      removeAvailableModules: true,
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: 'babel-loader',

        },
        {
          test: /\.scss$/,

          use: [
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        // same options in output
        filename: './bundle.js',
              path: path.resolve(__dirname, 'dist'),
        publicPath: '',
      }),
      new CleanWebpackPlugin(['dist']),
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
      }),
    ],
  };
};
