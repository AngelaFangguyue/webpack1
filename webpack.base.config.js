var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "登陆测试", //生成的html title名字，在模板文件中用  <title><%= htmlWebpackPlugin.options.title %></title>调用即可
      //chunks:['login'],  //引入entry中的key名字的js文件，此处为login，打包后html后会自动引入login.js文件
      filename: "index.html", // bulid目录下生成的html文件名
      template: "src/index.html" // 我们原来的index.html路径，作为模板
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        //loader: 'less-loader' // 将 Less 编译为 CSS
        use: ["file-loader"]
      },

      {
        test: /\.styl$/i,
        //loader: 'less-loader' // 将 Less 编译为 CSS
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          //"sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
          {
            loader: "stylus-loader"
          }
        ]
      },

      {
        test: /\.less$/i,
        //loader: 'less-loader' // 将 Less 编译为 CSS
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          //"sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
          {
            loader: "less-loader"
          }
        ]
      },

      {
        test: /\.scss$/i,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          //"sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass")
            }
          }
        ]
      }
    ]
  }
};
