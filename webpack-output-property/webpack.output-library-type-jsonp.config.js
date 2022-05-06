const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/output-library-type-jsonp"),
    library: {
      name: "LibraryJSONP",
      type: "jsonp",
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
      patterns: [{ from: "src/index-for-jsonp.html", to: "./" }],
    }),
  ],
  target: "web",
};
