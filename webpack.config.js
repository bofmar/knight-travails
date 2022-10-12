const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  rules: [
    {
      test: /\.scss$/i,
      use: ['style-loader', 'css-laoder', 'sass-loader'],
    },
  ],
};
