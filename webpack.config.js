'use strict';
var path = require('path');

module.exports = {
    //entrada de componentes
  entry: {
    'tablas/index': './frontend/src/tablas/index.jsx',
  

  },
  

  //salida de componentes
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]

  }
}
