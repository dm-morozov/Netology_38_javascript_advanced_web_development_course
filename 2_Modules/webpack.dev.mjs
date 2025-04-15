export default {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './result',
    open: true,
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
