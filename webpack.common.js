const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    moment: "./src/js/moment.js",
    cookies: "./src/js/cookies.js",
    sessionstorage: "./src/js/sessionstorage.js",
    menu: "./src/js/menu.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/*.DS_Store"],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["menu"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/gory.html",
      inject: true,
      chunks: ["menu"],
      filename: "gory.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rower.html",
      inject: true,
      chunks: ["menu"],
      filename: "rower.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/namiot.html",
      inject: true,
      chunks: ["menu"],
      filename: "namiot.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/kontakt.html",
      inject: true,
      chunks: ["moment","cookies","sessionstorage","menu"],
      filename: "kontakt.html",
    }),
  ],
};
