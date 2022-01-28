const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/public');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'}
        ]
      }
    ]
  }
};