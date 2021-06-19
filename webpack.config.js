const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const SemverWebpackPlugin = require("semver-extended-webpack-plugin");

module.exports = {
    mode: "production", // "production" | "development" | "none"
    entry: path.resolve(__dirname, "src", "index.js"),
    module: {
        rules: [
            {
                test: /\.m?(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", {targets: "defaults"}]],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-syntax-dynamic-import",
                        ],
                    },
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        publicPath: "auto", // "auto"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html",
        }),
        new SemverWebpackPlugin({
            files: [path.resolve(__dirname, "package.json")],
            incArgs: ["patch"],
            console: true,
            buildDate: true,
        }),
        new CopyPlugin({
            patterns: [
                {from: "public/*.ico", to: "[name][ext]"},
            ],
        }),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "build"),
        port: 9000,
        compress: true,
        overlay: true,
        open: true,
        hot: true,
    },
};
