const path = require("path");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/output-library-type-amd"),
    library: {
      name: "LibraryAmd",
      type: "amd",
    },
    clean: true,
  },
  devtool: false,
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
  },
  target: "web",
};
