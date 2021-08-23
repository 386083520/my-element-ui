const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'production',
    entry: {
        app: ['./src/index.js']
    },
    output: {
        // I:\vue\element\my-element-ui\build\lib
        path: path.resolve(process.cwd(), './lib'), // process.cwd()返回 Node.js 进程的当前工作目录返回 Node.js 进程的当前工作目录
        publicPath: '/dist/',
        filename: 'element-ui.common.js',
        library: 'ELEMENT',
        libraryTarget: 'commonjs2'
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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
