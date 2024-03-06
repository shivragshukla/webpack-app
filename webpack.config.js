const path = require('path');

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
}
