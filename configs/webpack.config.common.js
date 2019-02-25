const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

const resolveConfiguration = require('./webpack.config.resolve.js');
const {
  BASE_DIRECTORY,
  ENTRY_FILE_PATH,
  OUTPUT_DIRECTORY,
  OUTPUT_DIRECTORY_NAME,
  SOURCE_DIRECTORY,
} = require('./constants');

module.exports = {
  entry: ENTRY_FILE_PATH,
  output: {
    filename: 'index.js',
    path: OUTPUT_DIRECTORY,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          SOURCE_DIRECTORY,
        ],
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: resolveConfiguration,
  plugins: [
    // Delete output directory on each rebuild to avoid out-of-date file artifacts
    // (i.e file was deleted but isn't deleted from output directory)
    new CleanWebpackPlugin(
      [
        OUTPUT_DIRECTORY_NAME,
      ],
      {
        root: BASE_DIRECTORY,
      },
    ),
    new Dotenv(),
  ],
  // https://webpack.js.org/concepts/targets/#usage
  target: 'node',
  externals: [
    nodeExternals(),
  ],
};
