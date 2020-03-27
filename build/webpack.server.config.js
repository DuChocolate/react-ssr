const path = require('path');
const nodeExternals = require('webpack-node-externals');

const resolvePath = pathstr => path.resolve(__dirname, pathstr);

module.exports = {
  target: 'node',
  mode: 'development',
  entry: resolvePath('../src/server/app.js'),
  externals: [nodeExternals()],
  output: {
    filename: 'app.js',
    path: resolvePath('../dist/server'),
    chunkFilename: '[name].[chunkhash:8].js',

  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },{
        test: /\.css?$/,
        use: ['isomorphic-style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
          }
        }]
      }
    ]
  },
}
