const { resolve } = require('path');
const webpack = require('webpack');
const context = resolve(__dirname, 'src');
const src = resolve(__dirname, '../src');
const dist = resolve(__dirname, '../dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: {
    'bundle': [
      './src/index.jsx'
    ]
  },
  context: resolve(__dirname, '../'),
  output: {
    path: dist,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
      'DEBUG': false,
      '__DEVTOOLS__': false
    }),
    new ExtractTextPlugin({
      filename: '../dist/main.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true,
        global_defs: {
          __REACT_HOT_LOADER__: undefined
        }
      },
      minimize: true,
      debug: false,
      sourceMap: true,
      output: {
        comments: false
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: src,
        query: {
          plugins: [
            'transform-react-jsx',
            [
              'react-css-modules',
              {
                context
              }
            ]
          ]
        }
      },
      {
        test: /\.scss$/i,
        include: src,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
};