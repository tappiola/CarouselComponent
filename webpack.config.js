const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Entry point for our app, from which webpack starts analysis of files and their dependencies
  entry: {
    main: './src/index.js'
  },

  // Output directory for bundle created by webpack
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/bundle.js',
  },

  // Loaders
  module: {
    rules: [
      // Use babel to compile JS and JSX files
      // node_modules excluded, as normally npm packages are already bundled and transpiled
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // Process styles
      {
        test: /\.css$/i,
        use: [
          // Combine CSS into external file (alternative is 'style-loader', which puts styles to 'style' tag)
          MiniCssExtractPlugin.loader,

          // Parses CSS files
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              }
            }
          }
        ],
      },
    ],
  },
  plugins: [
    // Clean output directory each time
    new CleanWebpackPlugin(),

    // Inject produced bundle to HTML template
    new HtmlWebPackPlugin({
      template: 'src/index.html',
    }),
    
    // Output CSS into single file
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
    }),
  ],
};