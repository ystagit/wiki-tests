const path = require('path');

module.exports = {
  mode: 'development',

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@pages': path.resolve(__dirname, 'pages'),
      '@components': path.resolve(__dirname, 'components'),
      '@utils': path.resolve(__dirname, 'utils'),
    },
  },

  module: {
    rules: [
      {
        test: /\.cy\.js$/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: false,
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /\.cy\.js$/],
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: false,
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};