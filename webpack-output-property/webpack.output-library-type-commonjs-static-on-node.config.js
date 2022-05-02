const path = require("path");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(
      __dirname,
      "dist/output-library-type-commonjs-static-on-node"
    ),
    library: {
      type: "commonjs-static",
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
