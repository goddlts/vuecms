const path = require('path');
const root = __dirname;
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(root, 'dist'),
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,   //配置后缀名
        use: ['style-loader', 'css-loader', 'autoprefixer-loader']
        //css-loader   处理样式文件中的url()  
        //style-loader  作用 是吧css代码，插入到网页中 style
        //loader: 'style-loader!css-loader!autoprefixer-loader'   //loader执行的顺序从右到左
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|otf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 40000
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
        title: '页面标题',  //生成页面标题
        filename: 'index.html',
        template: 'index.html'
    })
 ]
}

