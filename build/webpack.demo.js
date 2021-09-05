const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpackConfig = {
    mode: process.env.NODE_ENV,
    entry: './examples/entry.js',
    output: {
        path: path.resolve(process.cwd(), './examples/element-ui/'),
        publicPath: '',
        filename: '[name].[hash:7].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    devServer: {
        host: '0.0.0.0',
        port: 8085,
        publicPath: '/',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                // todo: 这种写法有待调整
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './examples/index.html',
            filename: './index.html',
            favicon: './examples/favicon.ico'
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = webpackConfig;
