var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        'presets': ['es2015', 'stage-0',],
      },
    }, {
      test: /\.svg$/,
      loaders: ['react-svgdom', 'svgo',],
    },],
  },
  resolve: {
    modulesDirectories: ['node_modules', 'wip_modules',],
    alias: {
      'scrubs-components': '../'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
