const path = require('path');

//定一个通用的路径转换方法
const resolvePath = pathstr => path.resolve(__dirname, pathstr);

module.exports = {
  mode: 'development',
  entry: resolvePath('../src/client/app/index.js'), //入口文件
  output: {
    filename: 'index.js',
    path: resolvePath('../dist/static'),
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
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};
