const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production', // "production" | "development" | "none"
    //entry: './src/index.js',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        //plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.js',
        publicPath: 'auto', // '/assets/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 9000,
        compress: true,
        overlay: true,
        open: true,
    },
}