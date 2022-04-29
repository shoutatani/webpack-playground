const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    "entry": "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/output-library-type-this"),
    library: {
      name: "LibraryThis",
      type: "this",
    },
    clean: true,
  },
  devtool: false,
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index-for-this.html", to: "./" },
      ],
    }),
  ],
  target: "web",
};
