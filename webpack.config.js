const path = require('path');
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const {context} = require('./webpack.config');

// const NodeSass = require('node-sass');
// const SassLoader = require('sass-loader')

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const dirname = () => isDev ? `development/bundle` : `production/bundle.production_cards`




module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, `${dirname()}`),
    filename: './js/main.js',
    assetModuleFilename: 'assets/[name].[hash][ext][query]',
    publicPath: '',
  },
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, 'bundle'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.pug'),
      filename: `main.html`,
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/images'),
    //       to: path.resolve(__dirname, 'images')
    //     }
    //   ]
    // }),
    new webpack.ProvidePlugin({
      $: "jquery/dist/jquery.min.js",
      jQuery: "jquery/dist/jquery.min.js",
      "window.jQuery": "jquery/dist/jquery.min.js"
    })
  ],

  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',

      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',

        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            }
          },
        'css-loader', 'sass-loader'
        ],
      },
      { // loader of files больше не нужен после webpack 5.0
        test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]'
        }
      },
      // { // loader of files больше не нужен после webpack 5.0
      //   test: /\.js/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader'],
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'images/[name][ext][query]'
      //   }
      // },
      { // loader of files больше не нужен после webpack 5.0
        test: /\.(?:|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
    ]
  }
}
