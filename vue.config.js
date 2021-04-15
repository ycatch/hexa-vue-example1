module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "Hexabase-ToDo-example"
    }
  },
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/linker-api": {
        target: process.env.VUE_APP_HEXACLOUD_URL,
        pathRewrite: {
          "^/linker-api": process.env.VUE_APP_HEXACLOUD_PATH
        },
        logLevel: "debug",
      },
    },
  },
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
};
