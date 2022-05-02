const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/output-library-type-module"),
    library: {
      type: "module",
    },
    clean: true,
  },
  devtool: false,
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/index-for-module.html", to: "./" }],
    }),
  ],
  target: ["web", "es2020"],
};
