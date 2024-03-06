const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/index.js'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        historyApiFallback: true,
        port: 3000,
        hot: true,
        open: true,
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack app',
            template: path.resolve(__dirname,'./src/index.html')
        }),
    ],
}
