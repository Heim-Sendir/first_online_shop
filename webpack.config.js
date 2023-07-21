const path = require('path');

module.exports = {
    entry: './src/app.ts',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            "path": require.resolve("path-browserify"),
            "fs": require.resolve("fs-extra"),
            "crypto": require.resolve("crypto-browserify"),
            "assert": require.resolve("assert-browserify"),
            "process": require.resolve("process"),
            "url": require.resolve("url"),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer"),
            "os": require.resolve("os-browserify"),
            "zlib": require.resolve("zlib-browserify"),
            "constants": require.resolve("constants-browserify"),
            "http": require.resolve("stream-http"),
            "querystring": require.resolve("querystring-es3"),
            "child_process": false,
            "tls": require.resolve("tls"),
            "net": require.resolve("net"),
            "nock": require.resolve("nock"),
            "aws-sdk": false,
            "https": false,
            "timers": require.resolve("timers-browserify"),
            "mock-aws-s3": false,
            "async_hooks": false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                    'html-loader'
                ],
                exclude: /node_modules/
            }
        ]
    }
};