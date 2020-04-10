const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    // call dotenv and it will return an Object with a parsed key 
    const env = dotenv.config().parsed;
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});
    
    return {
        entry: path.resolve(__dirname, 'src/index'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: ['babel-loader']
            }]
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            port: 9000
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "src/index.html" //source html
            }),
            new webpack.DefinePlugin(envKeys)
        ]
    }
};