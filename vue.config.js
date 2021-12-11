module.exports = {
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  },
  configureWebpack: {
    performance: {
      hints: "error",
      maxAssetSize: 300000,
      maxEntrypointSize: 500000
    }
  }
};
