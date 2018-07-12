const path = require('path');

module.exports = {
  // Inform webpack that we're building bundle for node.js,
  // rather than for the browser

  target: 'node',

  // Root File for server application

  entry: './src/index.js',

  // Tell webpack were to put the output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
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