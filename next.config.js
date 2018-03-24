require("dotenv").config();

module.exports = {
  distDir: "build",
  exportPathMap: () => ({
    "/": { page: "/" }
  }),
  onDemandEntries: {
    maxInactiveAge: 100,
    pagesBufferLength: 0
  }
};
