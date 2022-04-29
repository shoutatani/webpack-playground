const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/output-library-type-global-on-node"),
    library: {
      name: "LibraryGlobalOnNode",
      type: "global",
    },
    clean: true,
  },
  devtool: false,
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/index-for-global-on-node.js", to: "./" }],
    }),
  ],
  target: "node",
};
