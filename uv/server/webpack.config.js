const path = require("path");

module.exports = {
  // other webpack configurations...

  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      url: require.resolve("url"),
    },
  },
};
const path = require("path");

module.exports = {
  // other webpack configurations...

  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      url: require.resolve("url"),
    },
  },
};
