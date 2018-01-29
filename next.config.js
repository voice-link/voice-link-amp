module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
  onDemandEntries: {
    maxInactiveAge: 100,
    pagesBufferLength: 0
  }
};
