var path = require('path')
const glob = require('glob-all')
var PurifyCSSPlugin= require('purifycss-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    'babel-polyfill',
    './src/js/index.jsx',
    './src/css/styles.scss'
  ],
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js',
  },

  //watch: true,

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ["transform-object-rest-spread", "transform-class-properties" ]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ["transform-object-rest-spread", "transform-class-properties" ]
          }
        }
      },
      {
        test:/\.css$/,
        // use: ExtractTextPlugin.extract({
        //   use: [ 
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         url: false
        //       }
        //     }
        //   ]
        // })
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test:/\.scss$/,
        // use: ExtractTextPlugin.extract({
        //   use: [ 
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         url: false
        //       }
        //     },
        //     'sass-loader'
        //   ]
        // })
        use: [
          MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            'sass-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions:['.js', '.jsx']
  },

  plugins: [
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, 'dist/index.html'),
        path.join(__dirname, 'src/js/*.js')
      ])
    }),
    new MiniCssExtractPlugin({
      filename: "../css/styles.css",
      chunkFilename: "id.css"
    })
  ]
};