'use strict'

// "scripts": {
//     "start": "webpack-dev-server --mode development",
//     "build": "webpack-dev-server --mode production",
// }

const dev = require('./config/webpack.dev')
const prod = require('./config/webpack.prod')

module.exports = (_env, argv) => {
    switch (argv.mode) {
        case 'none':
        case 'development':
            return dev
        case 'production':
            return prod
        default:
            throw new Error('No matching configuration was found!')
    }
}