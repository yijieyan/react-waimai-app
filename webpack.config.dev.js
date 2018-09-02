const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let srcRoot = path.resolve(__dirname, './src');
let pageDir = path.resolve(srcRoot, 'pages');
let mainFile = 'index.js';
let devPath = path.resolve(__dirname, 'dev');

function getEntry () {
  let entryMap = {};
  fs.readdirSync(pageDir).forEach((pathName) => {
    let fullName = path.resolve(pageDir, pathName);
    let stat = fs.statSync(fullName);
    let filename = path.resolve(fullName, mainFile);
    if (stat.isDirectory() && fs.existsSync(filename)) {
      entryMap[pathName] = filename;
    }
  })
  return entryMap;
}

function getEntryHtml () {
  let entryHtml = [];
  fs.readdirSync(pageDir).forEach(key => {
    let fullName = path.resolve(pageDir, key);
    let stat = fs.statSync(fullName);
    let filename = path.resolve(fullName, `${key}.html`);
    if (stat.isDirectory() && fs.existsSync(filename)) {
      entryHtml.push(new HtmlWebpackPlugin({
        filename: `${key}.html`,
        template: filename,
        chunks: [key]
      }));
    }
  })
  return entryHtml;
}

let entryMap = getEntry();
let entryHtml = getEntryHtml();
module.exports = {
  mode: 'development',
  entry: entryMap,
  output: {
    path: devPath,
    filename: '[name].min.js'
  },
  devServer: {
    contentBase: devPath,
    compress: true,
    hot: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)/,
        use: [{
          loader:'babel-loader'
        },{
          loader: 'eslint-loader'
        }],
        include:srcRoot
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'], 
        include: srcRoot
      },
      {
        test:/\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', {
          loader: 'sass-resources-loader',
          options: {
            resources: './src/assets/style/common.scss'
          }
        }],
        include: srcRoot
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader?limit=8192',
        include: srcRoot
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ].concat(entryHtml)
};