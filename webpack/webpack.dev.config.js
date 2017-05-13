const { resolve } = require('path');
const webpack = require('webpack');
const context = resolve(__dirname, 'src');
const src = resolve(__dirname, '../src');
const dist = resolve(__dirname, '../dist');

module.exports = {
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
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  }
};
