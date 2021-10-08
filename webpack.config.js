const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/build/",
    compress: true,
    port: 3001,
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://boat-server.herokuapp.com',
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ],
      },
    ]
  }
};
