const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/output-library-type-window"),
    library: {
      name: "LibraryWindow",
      type: "window",
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
      patterns: [{ from: "src/index-for-window.html", to: "./" }],
    }),
  ],
  target: "web",
};
