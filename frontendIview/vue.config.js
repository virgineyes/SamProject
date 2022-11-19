const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: "/",
  outputDir: "./dist",
  assetsDir: "./assets/",
  configureWebpack: config => ({
    entry: {
      app: ["babel-polyfill"],
    },
  }),
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"))
  },
}
