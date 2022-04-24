const path = require("path");

module.exports = {
  entry: {
    "entry": "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/target-node"),
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie: "11",
                  }
                },
              ],
            ],
          },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
  },
  target: "node",
};
