const path = require('path')
module.exports = {
  // define entry file and output
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  // define babel loader
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      }
    ]
  },
  devtool: 'eval-source-map'
}
