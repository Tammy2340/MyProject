var webpack = require('webpack');
var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
    entry: {                                         //唯一入口文件，相当于Java中的main方法
        'entry':'./app/entry.js'
    },
    output: {                                        //输出目录
        path: path.join(__dirname, "build"),          //__dirname是node.js中的一个全局变量，指向当前脚本执行所在的目录
        filename: '[name].[hash].bundle.js',         //打包后的js文件名
        publicPath: 'build/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        // 定义全局环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new AssetsPlugin({
            filename: 'build/webpack-assets.js',
            processOutput: function (assets) {
                return 'window.WEBPACK_ASSETS = ' + JSON.stringify(assets);
            }
        }),
        new ExtractTextPlugin('css.all.css')
    ],
    resoleve: {
        //实际就是自己添加后缀，默认是当成js文件来查找路径
        extenions: ['', 'js', 'jsx'],
        alias: {                                    //路径别名,只能在js文件中使用
            /*以前你可能这样引用 import { Nav } from '../../containers'
            现在你可以这样引用 import { Nav } from 'app/containers'*/
            containers: path.resolve(__dirname, 'app/js/containers'),
            components: path.resolve(__dirname, 'app/js/components'),
            images: path.resolve(__dirname, 'app/images')
        }
    },
    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,           //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,       //屏蔽不需要处理的文件（文件夹）（可选）
                loaders: ['babel-loader'],     //loaders的名称（必须）
            },
            {
                test: /\.(css|less)$/,
                loader:'style!css!less'
            },
            {
                test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
                loader: 'url?limit=1024&name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url?limit=100000&name=images/[hash:8].[name].[ext]"
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['es3ify-loader'],
            },
        ],
    },
    devServer: {
        disableHostCheck: true
    }
}
