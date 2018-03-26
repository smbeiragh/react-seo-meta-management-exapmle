/**
 * Created by sajjad on 3/14/18.
 */

'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: { main: [path.join(__dirname, 'src', 'client.js')] },
  output: {
    path: path.join(__dirname, 'public', 'assets', 'dist'),
    publicPath: '/assets/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: 'babel_cache'
          }
        }
      }
    ]
  }
};
