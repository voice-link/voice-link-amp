const path = require("path");

module.exports = {
  resolve: {
    modules: ["node_modules", "src"],
    alias: {
      static: path.resolve(__dirname, "../static")
    }
  }
};
