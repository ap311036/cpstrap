/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.WEBPACK_BUILD || process.env.NODE_ENV || 'development';

const paths = [
  "/",
  "/components/",
  "/components/avatar/",
  "/components/button/",
  "/components/buttongroup/",
  "/components/card/",
  "/components/exclusivelabel/",
  "/components/episodecard/",
  "/components/label/",
  "/components/icon/",
  "/components/metadata/",
  "/components/playicon/",
  "/components/shareicon/",
  "/components/slick/",
  "/components/videolabel/",
  "/components/tablist/",
  // -- APPEND ITEMS HERE --
  "/utilities/",
  "/utilities/colors/",
  "/utilities/clearfix/",
  "/404.html"
];

const config = {
  mode: env,
  devtool: 'source-map',
  devServer: {
    inline: false,
    disableHostCheck: true,
    contentBase: './build',
    historyApiFallback: true,
    stats: {
      chunks: false
    }
  },
  entry: './docs/lib/app',
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./build'),
    libraryTarget: 'umd',
    // globalObject: '(typeof self !== \'undefined\' ? self : this)'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([{ from: './docs/static', to: 'assets' }]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new StaticSiteGeneratorPlugin({
      paths,
      globals: {
        window: { },
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'assets/[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader?cacheDirectory'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.scss|\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          "sass-loader"
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'bootstrap-css': path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css'),
      'slick-css': path.join(__dirname, 'node_modules/slick-carousel/slick/slick.css'),
      'slick-theme-css': path.join(__dirname, 'node_modules/slick-carousel/slick/slick-theme.css'),
      'cpstrap-scss': path.resolve('./src/scss/index.scss'),
      cpstrap: path.resolve('./src'),
    }
  }
};

module.exports = config;
