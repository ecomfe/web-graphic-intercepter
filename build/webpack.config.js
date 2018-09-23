const path = require('path');
module.exports = {
    entry: {
        'web-graphic-intercepter': path.resolve(__dirname, '../src/main.js')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        library: 'wgi',
        libraryTarget: 'umd'
    }
};
