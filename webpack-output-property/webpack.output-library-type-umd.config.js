const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    entry: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/output-library-type-umd"),
    library: {
      name: "LibraryUmd",
      type: "umd",
    },
    clean: true,
    globalObject: "this",
  },
  devtool: false,
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index-for-umd.html", to: "./" },
        { from: "src/index-for-umd.js", to: "./" },
      ],
    }),
  ],
  target: "web",
};
