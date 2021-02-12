const path = require('path');

module.exports = {
  entry: {
    index: ['./example/App.tsx']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'example')
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  mode: 'production',
  plugins: [],
  devServer: {
    contentBase: './example',
    host: 'localhost',
    inline: true,
    open: true
  }
};
