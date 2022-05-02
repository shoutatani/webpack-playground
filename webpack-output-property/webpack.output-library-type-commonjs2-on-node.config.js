const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/output-library-type-commonjs2-on-node"),
    library: {
      type: "commonjs2",
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
      patterns: [{ from: "src/index-for-commonjs2-on-node.js", to: "./" }],
    }),
  ],
  target: "node",
};
