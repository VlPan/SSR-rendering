const path = require('path');

module.exports = {
  // Root File for server application

  entry: './src/client/client.js',

  // Tell webpack were to put the output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  // Tell webpack to run babel on every file in runs through
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: [
          'react',
          'stage-0', 
          ['env', { targets: { browsers: ['last 2 versions'] }}]
        ]
      }
    }]
  }
};