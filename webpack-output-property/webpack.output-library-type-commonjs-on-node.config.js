const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/output-library-type-commonjs-on-node"),
    library: {
      name: "LibraryCommonjsOnNode",
      type: "commonjs",
    },
    clean: true,
  },
  devtool: false,
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
  },
  target: "node",
};
