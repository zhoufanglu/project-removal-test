const path = require('path');

module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production'? '':'',
  // 输出文件目录
  outputDir: 'dist',

  lintOnSave: false,
  configureWebpack: (config) => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components')
        }
      }
    });
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: process.env.NODE_ENV === 'production',
    // 开启 CSS source maps?
    sourceMap: false,
    //requireModuleExtension: false,
    // css预设器配置项
    loaderOptions: {
      /*sass: { //全局scss
	      prependData: `@import "~@/assets/scss/entrance.scss";`
      }*/
    },
    // 启用 CSS modules for all css / pre-processor files.
    //requireModuleExtension: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // webpack-dev-server 相关配置
  devServer: {
    proxy: {
      // 设置代理
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: '127.0.0.1:8080', //设置你调用的接口域名和端口号
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'//这里理解成用‘/api’代替target里面的地址，
          // 后面组件中我们掉接口时直接用api代替
          // 比如我要调用'http://40.00.100.100:3002/user/add'，
          // 直接写‘/api/user/add’即可
        }
      }
    },
  },
  // 第三方插件配置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/scss/entrance.scss'),
      ]
    }
  }
}
