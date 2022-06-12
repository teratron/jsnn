'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = props => {
    return {
        entry: {
            //main: paths.src + '/index.js',
            //perceptron: paths.example + 'perceptron/index.js',
            main: paths.example + 'perceptron/index.js'
        },
        output: {
            path: paths.build,
            publicPath: 'auto',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: 'defaults'
                                    }
                                ]
                            ],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-object-rest-spread'
                            ]
                        }
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/i,
                    exclude: /node_modules/,
                    use: [
                        props.styleLoader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        'postcss-preset-env'
                                    ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(hbs|handlebars)$/i,
                    exclude: /node_modules/,
                    loader: 'handlebars-loader',
                    options: {
                        helperDirs: [
                            paths.src + '/templates/helpers'
                        ],
                        partialDirs: [
                            paths.src + '/templates',
                            paths.src + '/templates/partials',
                            paths.src + '/templates/pages',
                            paths.src + '/templates/layouts'
                        ]
                    }
                },
                {
                    test: /\.(svg|gif|png|jpe?g)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/media/[name].[hash][ext]'
                    }
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/fonts/[name].[hash][ext]'
                    }
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: paths.public,
                        globOptions: {
                            ignore: [
                                '**/*.DS_Store',
                                '**/*.html'
                            ]
                        },
                        noErrorOnMissing: true
                    }
                ]
            }),
            new HtmlWebpackPlugin({
                title: "Jet - Template",
                template: paths.public + '/template.html',
                filename: 'index.html',
                inject: 'body',
                minify: false
            })
        ],
        resolve: {
            modules: [paths.src, 'node_modules'],
            extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.sass'],
            alias: {
                '~': paths.src,
                '@': paths.src + '/js',
                jet$: paths.src + '/jet.js'
            }
        }
    }
}
