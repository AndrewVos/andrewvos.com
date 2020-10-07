const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: ['./src/scripts/shared.js', './src/scripts/index.js'],
    bio: './src/scripts/shared.js',
    books: ['./src/scripts/shared.js', './src/scripts/books.js']
  },
  devtool: isProduction ? 'eval-cheap-module-source-map' : 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    isProduction ? new MiniCssExtractPlugin() : null,
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'bio.html',
      template: './src/bio.html',
      chunks: ['bio']
    }),
    new HtmlWebpackPlugin({
      filename: 'books.html',
      template: './src/books.html',
      chunks: ['books']
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              [
                "@babel/plugin-transform-react-jsx",
                {
                  "pragma": "h",
                  "pragmaFrag": "Fragment",
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            }
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      }
    ]
  }
};
