const { resolve } = require('path');
const webpack = require('webpack');
const context = resolve(__dirname, 'src');
const src = resolve(__dirname, '../src');
const dist = resolve(__dirname, '../dist');

module.exports = {
  // Best way to learn all webpack options: https://github.com/webpack/webpack/blob/v1.13.3/lib/WebpackOptionsApply.js
  target: 'web',
  devtool: 'inline-source-map',
  entry: {
    'bundle': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ]
  },
  output: {
    path: dist,
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    // All options here: https://webpack.js.org/configuration/dev-server/
    hot: true,
    contentBase: dist,
    publicPath: '/',
    port: 3000,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true
    }
  },

  context: resolve(__dirname, '../'),
  plugins: [
    // See full list: https://github.com/webpack/docs/wiki/list-of-plugins
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
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
            options: {
              sourceMap: true,
              importLoaders: 1,
              minimize: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
