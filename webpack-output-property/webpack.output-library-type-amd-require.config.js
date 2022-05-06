const path = require("path");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/output-library-type-amd-require"),
    library: {
      type: "amd-require",
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
