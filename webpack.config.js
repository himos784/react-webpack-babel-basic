var webpack = require("webpack");
var path = require("path");

var dev = path.resolve(__dirname, "dev");
var dist = path.resolve(__dirname, "dist");
 
var config = {
  entry: dev + "/app.js",
  output: {
    path: dist,
    filename: "index.js"
  },
  watch: true,
  module: {
    loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query:{
            presets: ['react', 'es2015'],
          }
        }
    ]
  }
};

module.exports = config;