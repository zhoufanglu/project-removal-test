
module.exports = {
  "publicPath": "",
  "outputDir": "dist",
  "lintOnSave": false,
  "productionSourceMap": false,
  "css": {
    "extract": true,
    "sourceMap": false,
    "loaderOptions": {}
  },
  "parallel": true,
  "devServer": {
    "open": false,
    "host": "0.0.0.0",
    "port": 8080,
    "https": false,
    "hotOnly": false,
    "proxy": {
      "/api": {
        "target": "127.0.0.1:8002",
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": "/"
        }
      }
    }
  },
  "pluginOptions": {
    "style-resources-loader": {
      "preProcessor": "scss",
      "patterns": [
        "E:\\yitong\\experts-entry\\src\\assets\\scss\\entrance.scss"
      ]
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}